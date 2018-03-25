const express=require('express');
const router=express.Router();
var bodyparser=require('body-parser');

const Crimecity=require('../models/crimecity');


router.get('/getcities',(req,res,next)=>
    {
        
        Crimecity.find(function(err,crimes)
        {
            if(err){
                res.json(err);
            }
            else{
                res.json(crimes);
            }
        })
    
    });
router.post('/addcity',(req,res,next)=>
{
   let newCity=new Crimecity({
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
