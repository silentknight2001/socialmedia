const express = require("express");
const {registerUser, loginUser} = require("../Controller/AuthControler.js");


const router = express.Router();

router.post('/register',registerUser,loginUser)

router.post('/login',loginUser)


module.exports = router




