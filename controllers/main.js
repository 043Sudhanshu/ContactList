const contact=require('../models/ContactSchema');

const AddContact=async function(req,res){
  
  try{
            const { number } = req.body;
            const user = await contact.findOne({number});
           
            if(!user && number.length==10){
                
                await contact.create(req.body);
                
                return res.json(200,{
                        message:'Contact Created'
                });
            }
            else{
                return res.json(404,{
                    message:'Contact Cannot be Created'
                 });
            }
            
    }
  catch(err){
          console.log(err);
          return;
     }    
};

const DeleteContact=async function(req,res){
   try{
        const { number } = req.query;
        
        const user= await contact.findOne({number});
        
        if(user){
            user.remove();
            return res.json(200,{
                message:'Contact Deleted'
            });
        }
        else{
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