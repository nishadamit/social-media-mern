const express = require("express");
const multer = require("multer");
const router = express.Router();


const auth = require("../middlewares/auth");

const {
  createPost,
  updatePost,
  deletePost,
  likeOrUnlikePost,
  getPost,
  getTimeline,
  getAllUsersPost
} = require("../controllers/Post");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,"public/images")
  },
  filename: function (req, file, cb) {
    cb(null, req.body.img)
  }
})

const upload = multer({ storage: storage })

router.post("/create", auth, upload.single('postImage'), createPost);
router.put("/update/:id", auth, updatePost);
router.delete("/delete/:id", auth, deletePost);
router.put("/likeOrunlike/:id", auth, likeOrUnlikePost);
router.get("/post/:id", auth, getPost);
router.get("/timeline/:userId",auth, getTimeline);
router.get("/profile/allpost/:userId",auth, getAllUsersPost);

module.exports = router;
