
const express=require('express');
const port=8000;
const app=express();

require('./config/mongoose');

app.use(express.urlencoded());

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log(`server is running on port ${port}`);
    return;
})
