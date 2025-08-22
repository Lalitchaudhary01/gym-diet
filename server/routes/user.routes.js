const express = require("express");
const {
  register,
  verifyOtp,
  login,
  logoutUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/register", register);
router.post("/verify-otp", verifyOtp);
router.post("/login", login);
router.post("/logout", logoutUser);

module.exports = router;
