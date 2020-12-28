const express=require('express');
const port=8000;

const app=express();

app.get('/',function(req,res){
    return res.end('Home');
})


app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log(`server is running on port ${port}`);
    return;
})
