const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
//using the collection
const user = require('../schema/userschema');

router.post('/register',async(req,res)=>{
    var check = await user.findOne({email:req.body.email});
    if(!check){
        var companyName=req.body.companyName;
        var password = await bcrypt.hash(req.body.password,10);

        const person = await user.create({
            companyName: req.body.companyName,
            email:req.body.email,
            password:password
        });
        res.status(200).json({success:true,message:"user successfully registered"});
    }
    else{
        res.status(400).json({success:false,message:"user already exists"});
    }
});

router.post('/login',async(req,res)=>{
    var check = await user.findOne({email:req.body.email});
    if(check){  
        //in compare(input password,hashed password)
        var checkPassword = await bcrypt.compare(req.body.password,check.password);
        if(checkPassword){
            res.status(200).json({success:true,message:"user successfully logged in"});
        }else{
            res.status(200).json({success:true,message:"Password Mismatch"});
        }
    }
    else{
        res.status(200).json({success:true,message:"User not registered"});
    }
});

module.exports = router;