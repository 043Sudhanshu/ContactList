const contact=require('../models/ContactSchema');

const AddContact=async function(req,res){
    
  try{
            await contact.create(req.body);
            
            return res.json(200,{
                    message:'Contact Created'
                });
    }
  catch(err){
          console.log(err);
     }    
};

const DeleteContact=async function(req,res){
   try{
        const { number } = req.query;
        await contact.deleteOne({number});
     
        return res.json(200,{
            message:'Contact Deleted'
        });
    }
    catch(err){
         console.log(err);
         return;
    }
    
}


module.exports={
    AddContact,
    DeleteContact
}