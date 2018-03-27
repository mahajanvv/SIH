const express=require('express');
const router=express.Router();
var bodyparser=require('body-parser');

const crimecity=require('../models/crimecity');


router.get('/getcities',(req,res,next)=>
    {
        crimecity.find(function(err,crimes)
        {
            res.json(crimes);
            console.log("Hello" );
            if(err)
                console.log("error");
        })
    
    });
router.post('/addcity',(req,res,next)=>
{
   let newCity=new crimecity({
        city_code:req.body.city_code,
        city_name:req.body.city_name
    });
    newCity.save((err,ressave)=>{
        if(err)
            {
                res.json({msg:'Error'});
                res.json(newCity);
            }
        else{
        res.json({msg:'Success!!'});
        console.log(newCity);
    }
    });
});

module.exports=router;
