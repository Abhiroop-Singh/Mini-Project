const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email :{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    companyName: {
        type:String,
        required:true
    },
    companyRegNo:{
        type:Number
    },
    registeredAddress:{
        type:String
    },
    //indian or foreign
    bidderType:{
        type:String
    },
    city:{
        type:String,
    },
    state:{
        type:String
    },
    postalCode:{
        type:Number
    },
    panNo:{
        type:String
    },
    est_year:{
        type:Number
    },
    bussinessType:{
        type:String
    },
    legal_status:{
        type:String
    },
    company_category:{
        type:String
    },
    //Contact-Details
    title:{
        type:String
    },
    contact:{
        type:Number
    },
    name:{
        type:String
    },
    dob:{
        type:String
    },
    designation:{
        type:String
    },
    phone:{
        type:Number
    },
    previousTenders:[],
    biddedTenders:[],
    allotedTenders:[]
    //state,postal-code,pan/tan number,est year,nature of bussiness,legal status,
    //company category,Contact Details:[Title,Contact Name,DOB,Designation,Phone No.]
});

module.exports = mongoose.model('user',userSchema);