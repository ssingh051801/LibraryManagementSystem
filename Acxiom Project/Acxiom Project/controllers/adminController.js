const EmpModel =  require("../models/adminModel");


async function logout(req,res) {
    res.render('admin_logout');
}

async function getMaintainancedata(req,res)
{
    console.log('hi...');    
    let allData = await EmpModel.find();
    res.render('Mantainence');
    // res.render('showDataFromDB',{data : allData});      
}

async function getTransactiondata(req,res)
{
    console.log('hi...');    
    let allData = await EmpModel.find();
    res.render('Transactions');
    // res.render('showDataFromDB',{data : allData});      
}


async function addAdminData(req,res)
{
    console.log(req.fields);    
    let emp =  EmpModel({
        empName : req.fields.enm,
        empPassword : req.fields.pwd
    });
    console.log(emp);
    

    await emp.save();      
    res.status(200).send("Admin Data Inserted..");    
}
async function loginAdmin(req,res)
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
            res.render("adminHome");
             
          } catch (error) {
             console.error(error);
          }  
    }

// function add(req,res) {
//     console.log("Hello World!");
//     res.render('addUserPage');
// }
module.exports = {getMaintainancedata , logout , getTransactiondata ,addAdminData, loginAdmin} ;
