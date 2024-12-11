let mongoose = require("mongoose");
let adminSch = mongoose.Schema({

    empName:{type:String , required : true  } , 
    empPassword :{ type:String , required:true } , 
});

const EmpModel = mongoose.model("AdminData",adminSch) ; 
module.exports = EmpModel;
