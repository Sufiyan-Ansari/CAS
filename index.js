 const express = require('express');
 const app = express();

const routes = require('./router/routes');

// app.get('/',(req,res,next)=>{
//     console.log('Hello world!!');
//     res.send('Hello World');
// })

app.use(routes);

app.listen(3000,()=>{
    console.log(`Listening on port 3000`);
});
