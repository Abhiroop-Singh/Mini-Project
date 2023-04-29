const mongoose=require("mongoose")

const tenderDisplay = new mongoose.Schema({
    tenderTitle: {
        type:String,
        required:true
    },
    authority:{
        type:String,
        required:true
    },
    referenceNumber :{
        type:String,
        required:true
    },
    bidOpeningDate: {
        type:String,
        required:true
    },
    bidClosingDate: {
        type:String,
        required:true
    },
    tenderDetails:{
        type:String
    },
    location:{
        type:String
    },
    status:{
        type:String,
    },
    pdfUpload:{
        type:String,
        default:""
    }
});

module.exports = mongoose.model('tenderDisplay',tenderDisplay);