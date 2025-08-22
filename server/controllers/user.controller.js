const userModel = require("../models/user.model");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Nodemailer transport setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

// Helper function to send OTP
const sendOtpEmail = async (email, otp) => {
  try {
    await transporter.sendMail({
      from: `"MyApp" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP Code",
      html: `<h3>Your OTP code is <b>${otp}</b></h3><p>This code will expire in 10 minutes.</p>`,
    });
    console.log("✅ OTP email sent to:", email);
  } catch (error) {
    console.error("❌ Error sending OTP email", error);
  }
};

// ---------------- Register ----------------
const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await userModel.findOne({ email: email.toLowerCase() });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save user
    user = new userModel({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      otp,
      otpExpires,
      isVerified: false,
    });
    await user.save();

    // Send OTP email
    await sendOtpEmail(email, otp);

    res.json({
      success: true,
      message: "OTP sent to email",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// ---------------- Verify OTP ----------------
const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user = await userModel.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Incorrect OTP" });
    }

    if (user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    user.isVerified = true;
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    res.json({
      success: true,
      message: "Email verified successfully",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// ---------------- Login ----------------
// ---------------- Login ----------------
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!user.isVerified) {
      return res.status(400).json({ message: "Email not verified" });
    }

    const isMatch = await bcrypt.compare(password, user.password); // ✅ direct bcrypt
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

const logoutUser = async (req, res) => {
  try {
    // Agar tu cookie me token store kar raha hai:
    res.clearCookie("token"); // cookie ko clear kar diya

    // Agar tu frontend localStorage me token save karta hai toh
    // server side se kuch karne ki need nahi, frontend pe token remove ho jayega.

    return res.status(200).json({
      success: true,
      message: "Logged out successfully ✅",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Logout failed ❌",
      error: error.message,
    });
  }
};

// ✅ CommonJS export
module.exports = { register, verifyOtp, login, logoutUser };
