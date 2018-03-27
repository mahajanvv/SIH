const express=require('express');
const router=express.Router();

const crime=require('../models/crime');
const stat=require('../models/statistics');

router.get('/getcrimecount/:pid',(req,res,next)=>
    {
        var pid = req.params.pid;
        console.log(pid)
        stat.findOne({PoliceId:pid},function(err,crimescount)
        {
            if(err)
                console.log("error");
            else{
            res.json(crimescount);
            console.log("Hello1" );}
            
        })
    
    });

router.get('/updatecrimecount/:pid/:crime',function(req,res){
    

        stat.getstationcount(req.params.pid,req.params.crime,function(err,ct){
            if(err){
                res.json(err);
            }
            else{
                console.log(ct);
                res.json('success');
               /* let newStat=new stat({
                    PoliceId:req.params.pid,
                    Murder:req.body.Murder+oldstat.Murder,
                    Robbery:req.body.Robbery+oldstat.Robbery,
                    Drugs_Alcohol:req.body.Drugs_Alcohol+oldstat.Drugs_Alcohol,
                    Domestic_voilence:req.body.Domestic_voilence+oldstat.Domestic_voilence,
                    sex_crimes:req.body.sex_crimes+oldstat.sex_crimes,
                    Drink_Drive:req.body.Drink_Drive+oldstat.Drink_Drive,
                    vandalism:req.body.vandalism+oldstat.vandalism,
                    smuggling:req.body.smuggling+oldstat.smuggling,
                    kidnapping:req.body.kidnapping+oldstat.kidnapping,
                    cybercrime:req.body.cybercrime+oldstat.cybercrime,
                    poaching:req.body.poaching+oldstat.poaching,
                    total:req.body.total+oldstat.total,
                });
       
    
        console.log(newStat);
        newStat.save((err,st)=>{
            if(err)
                {
                    
                    res.json(err);
                    //res.json(crime);
                }
            else{
                console.log(st);
            res.json({msg:'Success!!'});
           
        }
        });*/
            }
    });
    });


    router.post('/addpolice',function(req,res){
    
        console.log(req.body.pid);

        let newStat=new stat({
            PoliceId:req.body.pid,
            Murder:0,
            Robbery:0,
            Drugs_Alcohol:0,
            Domestic_voilence:0,
            sex_crimes:0,
            Drink_Drive:0,
            vandalism:0,
            smuggling:0,
            kidnapping:0,
            cybercrime:0,
            poaching:0,
            total:0
        });

        console.log(newStat);
        newStat.save((err,st)=>{
            if(err)
                {
                    
                    res.json(err);
                    //res.json(crime);
                }
            else{
                console.log(st);
            res.json({msg:'Success!!'});
           
        }
        });
         
           
    });





module.exports=router;
