const express=require('express');
const router=express.Router();
var bodyparser=require('body-parser');

const config = require('../config/database');
const User = require('../models/user');
const victim=require('../models/victim');

router.post('/addvictim',(req,res,next)=>
{
    var username=req.body.refUserId;
    var crimeId=req.body.refCrimeId;
    var policeId=req.body.refPoliceId;
    User.getUserByUsername(username,function(err,user1){
        console.log(username);
        console.log(user1);
        var userid=user1._id;
   
   let newVictim=new victim({
       refPoliceId:policeId,
       refUserId:userid,
       refCrimeId:crimeId,
       policeMsg:req.body.policeMsg,
       progress:req.body.progress
    });
    newVictim.save((err,victimdata)=>{
        if(err)
            {
                res.json({msg:'Error'});
                res.json(newVictim);
            }
        else{
        res.json({msg:'Success!!'});
        console.log(victimdata);
    }
    });

});
});



module.exports=router;
