const AddContact=async function(req,res){
    
    await contact.create(req.body);
     
    return res.json(200,{
            message:'Contact Created'
        });
        
};


module.exports={
    AddContact
}