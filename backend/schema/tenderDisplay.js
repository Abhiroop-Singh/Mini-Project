const mongoose=require("mongoose")

const tenderDisplay = new mongoose.Schema({
    tenderTitle: {
        type:String,
        required:true
    },
    referenceNumber :{
        type:String,
        required:true
    },
    closingDate: {
        type:String,
        required:true
    },
    bidOpeningDate: {
        type:String,
        required:true
    },
    status:{
        type:String,
    }
});

module.exports = mongoose.model('tenderDisplay',tenderDisplay);