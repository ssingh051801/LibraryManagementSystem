const express = require("express");
const router = express.Router();
const adminController=require('../../controllers/adminController')


router.post("/addAdmin",adminController.addAdminData);
router.post("/login",adminController.loginAdmin);
router.get("/maintainance",adminController.getMaintainancedata);
router.get("/transactions",adminController.getTransactiondata);
router.get("/adminlogout",adminController.logout);
// router.get("/add",userController.add);

module.exports = router ; 