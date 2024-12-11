const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Library_management");

mongoose.connection.on("connected",()=>{
    console.log("Database successfully Connected...");
});

mongoose.connection.on("error",()=>{
    console.log("Database Connection Failed...");
});

module.exports = mongoose;
