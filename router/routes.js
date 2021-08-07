const express = require('express');
const routes = express.Router();

const mongo = require('mongodb');
const mongoose = require('mongoose');
const getContoller = require('../controller/getController');
const Customer = require('../models/customers');
const bodyParser = require('body-parser');


routes.post('/insert',(req,res,next)=>{
   
    const customer = new Customer ({
        _id : new mongoose.Types.ObjectId(),
        uid : req.body.uid,
        documentValidityDate : req.body.documentValidityDate,
        name : req.body.name,
        surname : req.body.surname,
        nickname:req.body.nickname,
        gender : req.body.gender,
        birthdate:req.body.birthdate





    });
    customer
    .save()
    .then(result=>{
        console.log(result);
        res.status(201).json({
            message:"Handling Post Request",
            createProduct:result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })
    });
    




})

module.exports = routes;

