const express=require('express');
const router=express.Router();

const contact=require('../models/ContactSchema');

const controller=require('../controllers/main');

router.post('/Add',controller.AddContact);

router.delete('/Delete',controller.DeleteContact);

router.put('/Update',controller.UpdateContact);


module.exports=router;