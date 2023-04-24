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
      .json({ success: false, message: "email or password is incorrect" });
  }
  const token = await user.generateToken();
  res.status(200).json({ success: true, message: "Login Successfuly", token });
};

module.exports = {
  register,
  login,
};
