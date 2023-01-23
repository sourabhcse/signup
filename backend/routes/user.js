const express = require("express");
const userController = require("../controllers/users");
const router = express.Router();

router.post("/user/signup", userController.singUpUser);
router.post("/user/login", userController.loginUser);
