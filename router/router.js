const express = require('express');
const router = express.Router();
const {verifySignup,login}=require('../controller/demo')

const verifyToken = require("../middleware/auth")
router.post("/api/Signup",verifySignup);
router.post("/api/login", login);
module.exports = router