const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const tender =require("../schema/tenderDisplay");

router.post("/tenderdisplay",async(req,res) =>{
    let t=await tender.find({status:"ongoing"});
    res.status(200).json({success:true,data:t})
})





module.exports = router;