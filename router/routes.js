const express = require('express');
const routes = express.Router();
const getContoller = require('../controller/getController');


routes.get('/',getContoller.GetContoller);

routes.get('/POST',(req,res,next)=>{
    console.log(req);
    res.send('This is post , comming from Router')
})

module.exports = routes;

