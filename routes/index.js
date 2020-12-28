const express=require('express');
const router=express.Router();

const contact=require('../models/ContactSchema');

const controller=require('../controllers/main');

router.get('/Add',controller.AddContact);

module.exports=router;

