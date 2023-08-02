const express = require("express");
const router = express.Router();

// Controller
const {register, login, getCurrentUser, update, getUserById} = require("../controllers/UserController");

// Middlewares
const validate = require("../middlewares/HandleValidation");
const {userCreateValidation, loginValidation, userUpdateValidation} = require("../middlewares/userValidation");
const authGuard = require("../middlewares/AuthGuard");
const { imageUpload } = require("../middlewares/ImageUpload");

// Routes
router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);
router.put("/", authGuard, userUpdateValidation(), validate, imageUpload.single("profileImage"), update);
router.get("/:id", getUserById);

module.exports = router;