const express=require('express')
const app=express();

const router=express.Router();
const team1=[];
const team2=[];
const date=[];
const time=[];
const venue=[];


router.get('/add-game',(req,res,next)=>{
    res.render('add-game');
})
router.post('/add-game',(req,res,next)=>{
    team1.push(req.body.team1)
    team2.push(req.body.team2)
    date.push(req.body.date)
    time.push(req.body.time)
    venue.push(req.body.venue)
    res.redirect('/home');
})

exports.router=router
exports.data={team1,team2,date,time,venue}