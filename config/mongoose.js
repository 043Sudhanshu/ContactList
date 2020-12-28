const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Contact');
const db=mongoose.connection;

db.on('error',function(err){
    console.log(`Database error: ${err}`);
});

db.on('open',function(){
    console.log("server connected to db");
});

module.exports=db;