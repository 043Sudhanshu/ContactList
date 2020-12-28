const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Contact');
const db=mongoose.connection;

db.on('error',console.error.bind(console,"error connecting to db"));

db.once('open',function(){
    console.log("server connected to db");
});

module.exports=db;