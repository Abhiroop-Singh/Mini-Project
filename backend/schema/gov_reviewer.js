const mongoose =require('mongoose')
const gov_reviewer=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('gov_reviewer',gov_reviewer)