const express = require("express");
const User = require("../models/userModel");
const {
  Register,
  Login,
  protectedRoute,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
router.post("/register", Register);
router.post("/login", Login);
router.get("/protected", authMiddleware, protectedRoute);

module.exports = router;
