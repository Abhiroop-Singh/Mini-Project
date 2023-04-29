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
            email:req.body.email,
            password:password,
            companyName:req.body.companyName,
            companyRegNo:req.body.companyRegNo,
            registeredAddress:req.body.registeredAddress,
            bidderType:req.body.bidderType,
            city:req.body.city,
            state:req.body.state,
            postalCode:req.body.postalCode,
            panNo:req.body.panNo,
            est_year:req.body.est_year,
            bussinessType:req.body.bussinessType,
            legal_status:req.body.legal_status,
            company_category:req.body.company_category,
            title:req.body.title,
            contact:req.body.contact,
            name:req.body.name,
            dob:req.body.dob,
            designation:req.body.designation,
            phone:req.body.phone
        });
        res.status(200).json({success:true,message:"bidder successfully registered"});
    }
    else{
        res.status(400).json({success:false,message:"bidder already exists"});
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