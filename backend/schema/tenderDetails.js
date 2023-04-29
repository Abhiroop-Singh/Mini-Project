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
    location:{
        type:String
    },
    status:{
        type:String,
    },
    pdfDescription:{
        type:String
    }
});

module.exports = mongoose.model('tenderDisplay',tenderDisplay);