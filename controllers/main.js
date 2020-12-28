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

const UpdateContact=async function(req,res){
 
    try{
        const { name , number } =req.body;
        const Num=req.query.number;
        const user = await contact.findOne({number:Num});
      
        if(user){
            user.name=name;
            user.number=number;
            user.save();
           
            return res.json(200,{
                message:'Contact Updated'
            });    
        
        }else{
            return res.json(404,{
                message:'Not found'
            });   
        }
        
    }
    catch(err){
        console.log(err);
        return;
    }
}




module.exports={
    AddContact,
    DeleteContact,
    UpdateContact
}