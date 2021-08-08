 const express = require('express');
 const app = express();
 const mongoose = require('mongoose');
 const dotenv = require('dotenv');

const routes = require('./router/routes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

 dotenv.config();
 mongoose.connect(process.env.DB_CONNECT,{userMongoClient:true},()=> console.log('Mongoose Connected !'));

app.use(routes);

app.listen(3000,()=>{
    console.log(`Listening on port 3000`);
});
