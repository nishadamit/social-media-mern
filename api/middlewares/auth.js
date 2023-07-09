const jwt = require("jsonwebtoken");
const userModel = require("../models/User");
const auth = async (req, res, next) => {
  try {
    const token = req.header("authorization").split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) throw new Error();
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Please authenticate" });
  }
};

module.exports = auth;
