const userModel = require("../models/User");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists." });
    }
    let userr = await userModel.create({ username, email, password });
    res.status(200).json({
      success: true,
      message: "User registered successfully!",
      user: userr,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User does not exits" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Email or Password is incorrect" });
    }
    const token = await user.generateToken();
    res.status(200).json({ success: true, message: "Login Successfuly", token, user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find({});
    res.status(200).json({ success: true, users: allUsers });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens?.filter((token) => token.token !== req.token);
    await req.user.save();
    res.status(200).json({ success: true, message: "Logout successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getUser = async( req,res ) =>{
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    res.status(200).json({success: true, message: "User details fetched successfully", user})
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }

}

const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  if (req.params.id.toString() !== req.user._id.toString()) {
    return res.status(403).json({ success: false, message: "Unauthorized" });
  }
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.status(200).json({ success: true, message: "Updated successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteUser = async (req, res) => {
  if (req.params.id.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      success: false,
      message: "You not allowed delete someone profile",
    });
  }
  try {
    await userModel.findByIdAndDelete(req.user._id);
    res
      .status(200)
      .json({ success: true, message: "User Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const followAndunfollow = async (req, res) => {
  try {
      let msg = "";
      if (req.params.id.toString() === req.user._id.toString()) {
        res
          .status(400)
          .json({ success: true, message: "You cannot follow yourself" });
      }

      const user = await userModel.findById(req.params.id);
      const currentUser = req.user;
      let alreadyFollowed = user.followers.find(
        (follow) => follow.toString() === currentUser._id.toString()
      );

      if (alreadyFollowed) {
        user.followers = user.followers.filter(
          (follow) => follow.toString() !== currentUser._id.toString()
        );
        await user.save();
        currentUser.followings = currentUser.followings.filter(
          (following) => following.toString() !== req.params.id.toString()
        );
        await currentUser.save();
        msg = "User Unfollowed Successfully";
      } else {
        user.followers.push(currentUser._id);
        await user.save();
        currentUser.followings.push(req.params.id);
        await currentUser.save();
        msg = "User Followed Successfully";
      }
      return res.status(200).json({ success: true, message: msg });
  } catch (error) {
      res.status(400).json({ success: false, message: error.message });
  }
};

const getUserFriends = async (req, res) =>{
    try {
      const {id} = req.params;
      const user = await userModel.findById(id);
      if(user.followings.length !== 0){
          const friends = await Promise.all(user?.followings.map((friendId)=>{
            return userModel.findById(friendId)
          }))
          let friendList = friends.map((friend) =>{
            const {_id, username, profilePicture} = friend;
            return {_id, username, profilePicture}
          })
          res.status(200).json({success: true,message:"FriendList fetched successfully", friendList})
      }else{
          res.status(200).json({success: true,message:"FriendList fetched successfully", friendList:[]})
      }

    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
  register,
  login,
  getAllUsers,
  logout,
  getUser,
  updateUser,
  deleteUser,
  followAndunfollow,
  getUserFriends
};
