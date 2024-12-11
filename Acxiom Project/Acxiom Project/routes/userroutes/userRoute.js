const express = require("express");
const router = express.Router();
const userController=require('../../controllers/userController')


router.post("/addUser",userController.addUserData);
// router.get("/add",userController.add);

router.post("/login",userController.loginUser);

router.get("/transactions",userController.getTransactiondata);

router.get("/logout",userController.logout);


module.exports = router ; 