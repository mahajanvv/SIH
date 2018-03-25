const express=require('express');
const router=express.Router();
var bodyparser=require('body-parser');

const crime=require('../models/crime');

router.get('/getcrimes',(req,res,next)=>
    {
        crime.find(function(err,crimes)
        {
            res.json(crimes);
            console.log("Hello" );
            if(err)
                console.log("error");
        })
    
    });
router.post('/addcrimes',(req,res,next)=>
{
   let newCrime=new crime({
        crimetypeID :req.body.crimetypeID,
        policestationID:req.body.policestationID,
        address:req.body.address,
        title:req.body.title,
        description:req.body.description,
        status :req.body.status,
        create_date:req.body.create_date,
        latlong :req.body.latlong
    });
    newCrime.save((err,crime)=>{
        if(err)
            {
                res.json({msg:'Error'});
                res.json(newCrime);
            }
        else{
        res.json({msg:'Success!!'});
        console.log(newCrime);
    }
    });
});

module.exports=router;