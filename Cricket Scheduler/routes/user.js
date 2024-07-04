const express=require('express')
const app=express()

const router=express.Router();
const adminData=require('./admin.js');

router.get('/home',(req,res,next)=>{
  res.render('home',{data:adminData.data})
})



exports.router=router;