const express = require("express");
const PasswordRouters = express.Router();

let password = [];

// post method

PasswordRouters.post("/create",(req, res, next)=>{
    if(req.body.appName){
        password.push(req.body);
    }
    res.status(200).json({
        message:"Created successfully",

    })
} )

// Get Method

PasswordRouters.get("/", (req, res, next)=>{
   res.status(200).json({
    message:"Data Fetched successfully",
    data : password,
   })

})


// update method



module.exports = PasswordRouters;