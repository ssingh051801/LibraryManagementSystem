const express = require("express");
const app = express();
const HOST = 'localhost'
const PORT = 3003;
let formidable = require('express-formidable');
const db = require("./db");
const cors = require('cors');
let userRoutes=require('./routes/userroutes/userRoute');
let adminRoutes=require('./routes/adminroutes/adminRoute')


app.use(formidable());

app.use("/user",userRoutes);
app.use("/admin",adminRoutes);
app.set("view engine","ejs");
app.use(cors());

app.get("/",( req, res )=>{

    res.render("home")
});

app.get("/add",(req,res)=>{
    console.log("Hello Duniya");
    res.render("user");

});

app.get("/push",(req,res)=>{
    console.log("Hello Duniya");
    res.render("admin");

});

// For user authentication
app.get("/login",(req,res)=>{

    res.render("userLoginPage");

});


// For Admin Authentication
app.get("/adminlogin",(req,res)=>{

    res.render("adminLoginPage");

});

// for user homepage
// app.get("/pop",(req,res)=>{
//     console.log("Hello Duniya");
//     res.render("userh");

// });

// AddBooks
app.get("/addBooks", (req, res) => {
    // res.send(`Welcome home page..... `)
    console.log("Hellloooo....");    
    res.render("adminaddb");
});

app.listen(PORT,HOST,(err)=>{

    if(!err)
    {
        console.log(`Server Running at http://${HOST}:${PORT} `);
        
    }
    else
    {
        console.log(`Server not Running Error : ${err} `);
    }

}) ;