const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
//using the collection
const gov_reviewer=require("../schema/gov_reviewer")

router.post('/govr_login',async(req,res)=>{
    var check = await gov_reviewer.findOne({email:req.body.email});
    if(check){  
        
        var checkPassword = await bcrypt.compare(req.body.password,check.password);
        if(checkPassword){
            res.status(200).json({success:true,message:"gov successfully logged in"});
        }else{
            res.status(200).json({success:true,message:"Password Mismatch"});
        }
    }
    else{
        res.status(200).json({success:true,message:"gov or reviewer not registered"});
    }
});

router.post("/govr_signup",async(req,res)=>{
    const check =await gov_reviewer.findOne({email:req.body.email})
    if(!check){
        var password = await bcrypt.hash(req.body.password,10);
        const per=await gov_reviewer.create({ 
            email:req.body.email,
            password:password
        })
        res.status(200).json({success:true,message:"gov_r registered successfully"});
    }
    else{
        res.status(400).json({success:false,message:"already exist"})
    }
})
module.exports=router