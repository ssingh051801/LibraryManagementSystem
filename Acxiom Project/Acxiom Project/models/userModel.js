let mongoose = require("mongoose");
let empSch = mongoose.Schema({

    empName:{type:String , required : true  } , 
    empPassword :{ type:String , required:true } , 
});

const EmpModel = mongoose.model("UserData",empSch); 
module.exports = EmpModel;
