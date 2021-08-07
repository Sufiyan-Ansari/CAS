const mongoose = require('mongoose');


const customerSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    uid: String,
    documentValidityDate:Date,
    name:String,
    surname:String,
    nickname:String,
    gender:String,
    birthdate:Date
})

module.exports = mongoose.model('Customer',customerSchema);