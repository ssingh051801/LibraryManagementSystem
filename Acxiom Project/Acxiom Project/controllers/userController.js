const EmpModel =  require("../models/userModel");





// async function getMaintainancedata(req,res)
// {
//     console.log('hi...');    
//     let allData = await EmpModel.find();
//     res.render('Mantainence');
//     // res.render('showDataFromDB',{data : allData});      
// }

async function logout(req,res) {
    res.render('user_logout');
}

async function getTransactiondata(req,res)
{
    console.log('hi...');    
    let allData = await EmpModel.find();
    res.render('Transactions');
    // res.render('showDataFromDB',{data : allData});      
}



async function addUserData(req,res)
{
    console.log(req.fields);    
    let emp =  EmpModel({
        empName : req.fields.enm,
        empPassword : req.fields.pwd
    });
    console.log(emp);
    

    await emp.save();      
    res.status(200).send("User Data Inserted..");    
}

// function add(req,res) {
//     console.log("Hello World!");
//     res.render('addUserPage');
// }

async function loginUser(req,res)
{
    const jwt = require("jsonwebtoken");
    let createSecretToken = (id) => {
        return jwt.sign({ id }, 'IFACET_TOKEN_KEY', {
          expiresIn: 3 * 24 * 60 * 60,
        });
      };

        try {
            const name = req.fields.enm;
            const password = req.fields.pwd;                   
            
        
            const user = await EmpModel.findOne({empName:name,empPassword:password });
            if(!user){
              return res.status(201).send("User Not Found")
            }            
            const token = createSecretToken(user._id);            
            res.render("userh");
             
          } catch (error) {
             console.error(error);
          }  
    }



module.exports = {getTransactiondata, logout, addUserData, loginUser} ;
