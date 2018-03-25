const express=require('express');
const router=express.Router();
var bodyparser=require('body-parser');

const config = require('../config/database');
const User = require('../models/user');
const victim=require('../models/victim');

router.post('/addvictim',(req,res,next)=>
{
    var useremail=req.email;
    var crimeId=req.crimeId;
    var policeId=req.policeId;
    var userid;
    User.findUserIdByEmail(useremail,function(err,user1){
        userid=user1._id;
    });
   let newVictim=new victim({
       refPoliceId:policeId,
       refUserId:userid,
       refCrimeId:crimeId
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



module.exports=router;
