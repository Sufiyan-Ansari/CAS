const mongoose = require('mongoose');

const UniqueID = mongoose.Schema({
    type:String,
    value:String
})

const customerSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    recordId :
    {
        type:Number,
        required : true,
        minimum : 0,
        maximum: 1000000000,
        unique:true
    },
    uid: [UniqueID],
    documentValidityDate:Date,
    name:String,
    surname:String,
    nickname:String,
    gender:String,
    birthdate:Date
})




module.exports = mongoose.model('Customer',customerSchema);