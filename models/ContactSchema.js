const mongoose=require('mongoose');
const ContactSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    }

},{timestamps:true});

const contact=mongoose.model('Contact',ContactSchema);
module.exports=contact;