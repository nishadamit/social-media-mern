const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getUser,
  getAllUsers,
  logout,
  updateUser,
  deleteUser,
  followAndunfollow,
  getUserFriends
} = require("../controllers/User");
const auth = require("../middlewares/auth");


router.get("/friends/:id", auth, getUserFriends)
router.post("/register", register);
router.post("/login", login);
router.get("/all", auth, getAllUsers);
router.get("/:id", getUser);
router.post("/logout", auth, logout);
router.put("/update/:id", auth, updateUser);
router.delete("/deleteuser/:id", auth, deleteUser);
router.put("/followAndunfollow/:id", auth, followAndunfollow);

module.exports = router;
