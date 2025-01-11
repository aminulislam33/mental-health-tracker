const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { generateToken } = require("../services/tokenService");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        status: "error",
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      return res.status(201).json({
        status: "success",
        message: "User registered successfully",
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } else {
      return res.status(400).json({
        status: "error",
        message: "Invalid user data",
      });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      status: "error",
      message: "Server error. Please try again later.",
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: "error",
        message: "Invalid email or password",
      });
    }

    const payload = { id: user._id, name: user.name, email: user.email };

    const token = generateToken(payload);

    return res.status(200).json({
      status: "success",
      message: "Login successful",
      data: {
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      status: "error",
      message: "Server error. Please try again later.",
    });
  }
};

const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user) {
    return res.status(200).json({
      status: "success",
      data: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } else {
    return res.status(404).json({status: "error", message: "User not found" });
  }
};

module.exports = { registerUser, loginUser, getUserProfile };