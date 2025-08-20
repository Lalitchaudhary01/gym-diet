const express = require("express");
const {
  register,
  verifyOtp,
  login,
  logout,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/register", register);
router.post("/verify-otp", verifyOtp);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
