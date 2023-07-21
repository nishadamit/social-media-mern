const postModel = require("../models/Post");
const userModel = require("../models/User");

// create a post
const createPost = async (req, res) => {
  try {
    const { userId, desc, img } = req.body;
    if (userId.toString() !== req.user._id.toString())
      return res.status(403).json({ success: false, message: "Unauthorised" });
    const post = await postModel.create({ userId, desc, img });
    res.status(200).json({
      success: true,
      message: "Post created successfully!",
      post: post,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//update a post
const updatePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postModel.findById(id);
    if (post.userId.toString() !== req.user._id.toString())
      return res.status(403).json({ success: false, message: "Unauthorised" });

    await postModel.updateOne({ $set: { ...req.body } });
    res
      .status(200)
      .json({ success: true, message: "Post updated successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//delete a post
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postModel.findById(id);
    if (post.userId.toString() !== req.user._id.toString())
      return res.status(403).json({ success: false, message: "Unauthorised" });

    await postModel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Post deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// like a post
const likeOrUnlikePost = async (req, res) => {
  console.log("liked called")
  const { id } = req.params;
  const userId = req.user._id;
  try {
    const post = await postModel.findById(id);
    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      return res.status(200).json({ success: true, message: "Post liked!" });
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      return res.status(200).json({ success: true, message: "Post unliked!" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get a post
const getPost = async(req,res) =>{
  try {
    const post = await postModel.findById(req?.params?.id);
    res.status(200).json({success: true, message:"Post fetched successfully", post})
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
// get timeline post
const getTimeline = async(req,res) =>{
  try {
    let posts = [];
    let friendPosts = [];
    const { userId } = req.params;
    const currentUser = await userModel.find({_id: userId});
    const currentUserPosts = await postModel.find({userId: userId});
    if(currentUser[0].followings.length !== 0){
      console.log("called")
      friendPosts = await Promise.all(currentUser[0].followings.map((friend) => {
       return postModel.find({userId: friend})
      }))
      console.log(friendPosts)
    }

    posts = [...currentUserPosts, ...friendPosts[0]]

    res.status(200).json({success: true, message:"Timeline fetched successfully!",posts})
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

module.exports = {
  createPost,
  updatePost,
  deletePost,
  likeOrUnlikePost,
  getPost,
  getTimeline
};
