const express = require('express');

const router = express.Router();
const multer = require('multer');
const bcrypt = require('bcrypt');
const tender =require("../schema/tenderDetails");

//file upload 
let file_name;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,'./uploads');
  },
  filename: (req, file, cb) => {
    
    file_name = file.originalname;
    cb(null, file.originalname);
  },
});  

const upload = multer({
  storage: storage,
});

router.post("/tenderdisplay",async(req,res) =>{
    let t=await tender.find();
    res.status(200).json({success:true,data:t})
})

//not tested
router.post("/uploadTender",upload.single("image"),async(req,res)=>{
    const data = await tender.create({
        tenderTitle:req.body.tenderTitle,
        authority:req.body.authority,
        referenceNumber:req.body.referenceNumber,
        bidOpeningDate:req.body.bidOpeningDate,
        bidClosingDate:req.body.bidClosingDate,
        tenderDetails:req.body.tenderDetails,
        location:req.body.location,
        status:req.body.status,
        myFile:file_name
    });
    // res.status(200).json({success:true,message:"Tender uploaded"});

    return res.redirect('/gov');
})



module.exports = router;