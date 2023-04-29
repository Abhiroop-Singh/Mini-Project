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


module.exports=router