const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");

const {
  createPost,
  updatePost,
  deletePost,
  likeOrUnlikePost,
  getPost,
  getTimeline
} = require("../controllers/Post");

router.post("/create", auth, createPost);
router.put("/update/:id", auth, updatePost);
router.delete("/delete/:id", auth, deletePost);
router.put("/likeOrunlike/:id", auth, likeOrUnlikePost);
router.get("/post/:id", auth, getPost);
router.get("/timeline/:userId", getTimeline);

module.exports = router;
