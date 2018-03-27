const express=require('express');
const router=express.Router();
var bodyparser=require('body-parser');

const crime=require('../models/crime');
const CrimeCity = require('../models/crimecity');

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
    console.log(req.body.city_code);
    CrimeCity.findCityCodeByCity(req.body.city_code,function(err,ct){
        if(err){
            res.json(err);
        }
        else{
            var city_code1=ct.city_code;
            console.log("1"+ct);

    

   let newCrime=new crime({
        crimetypeID :req.body.crimetypeID,
        policestationID:req.body.policestationID,
       // address:req.body.address,
        city_code:city_code1,
        title:req.body.title,
        description:req.body.description,
        crime_date:req.body.crime_date,
       // status :req.body.status,
       // create_date:req.body.create_date,
        latlong :req.body.latlong
    });

    console.log(req.body);
    newCrime.save((err,crime)=>{
        if(err)
            {
                
                res.json(err);
                //res.json(crime);
            }
        else{
        res.json({msg:'Success!!'});
        //console.log(crime);
    }
    });
        }
});
});


router.put('/updatecrime/:_id',function(req,res){
    var id = req.params._id;
    var crime1 = req.body;
    crime.updateCrime(id,crime1,function(err,crime2){
        if(err){
            res.json(err);
        }
        res.json(crime2);
        console.log("0"+crime2);
    });
});

router.get('/getCrimeByCity/:city',function(req,res){
    var city1= req.params.city;
    console.log(city1);

    CrimeCity.findCityCodeByCity(city1,function(err,ct){
    var city_code1=ct.city_code;
    
   console.log(city_code1);
    crime.find({city_code:city_code1},function(err,cts)
    {
            res.json(cts);
            
            if(err)
                console.log("error");
          else
               console.log("Hello" );
    });

});
});

//deleting a crime by id
router.get('/deleteCrime/:_id', (req, res) => {

    crime.remove({_id: req.params._id}, (err, result)=>{
        console.log("removed");
        console.log(result);
        if(err){
            console.log(" err");
            res.send(err);
        }else{
            console.log("removed1");
            res.json(result);
        }
    });
});

//delete all crimes
router.get('/deleteCrimes', (req, res) => {

    crime.deleteMany({}, (err, result)=>{
        console.log("removed");
        console.log(result);
        if(err){
            console.log(" err");
            res.send(err);
        }else{
            console.log("removed1");
            res.json(result);
        }
    });
});


//get by date
router.get('/getCrimeByDate/:start/:end',function(req,res){
    var start = req.params.start;
    var end = req.params.end;
    var q = new Date();
    var m = q.getMonth();
    var d = q.getDay();
    var y = q.getFullYear();

    console.log(start);
    console.log(end);

    crime.find({ "create_date": { $gte:start, $lt: end } },function(err,crimes)
    {
            res.json(crimes);
            console.log("Hello" );
            if(err)
                console.log("error");
    });
});

//get crime records of this month

router.get('/getCrimeByMonth/:mons',function(req,res){
    var mon = req.params.mons;
    var q = new Date();
    var m = q.getMonth();
    var d = q.getDay();
    var y = q.getFullYear();
    console.log(mon);
    var dates = new Date(y,mon,1);
    var datee=new Date(y,mon,31);
    crime.find({ "create_date": { $gte:dates, $lt:datee } },function(err,crimes)
    {
            res.json(crimes);
            console.log("Hello" );
            if(err)
                console.log("error");
    });
});

module.exports=router;

//get crime year wise

router.get('/getCrimeByYear/:yr',function(req,res){
    var yrs = req.params.yr;
    console.log(yrs);
    var dates = new Date(yrs,0,1);
    var datee=new Date(yrs,11,31);
    crime.find({ "create_date": { $gte:dates, $lt:datee } },function(err,crimes)
    {
            res.json(crimes);
            console.log("Hello" );
            if(err)
                console.log("error");
    });
});


//get crime by police station

router.get('/getCrimeByPolice/:pid',function(req,res){
    var policeid = req.params.pid;
    crime.find({policestationID:policeid},function(err,crimes)
    {
            res.json(crimes);
            console.log("Hello" );
            if(err)
                console.log("error");
    });
});


router.get('/getCrimeById/:cid',function(req,res){
  //  var crimeid = req.params.cid;
    crime.find({_id: req.params.cid},function(err,crimes)
    {
            res.json(crimes);
            console.log(crimes );

            if(err)
                console.log("error");
    });
});
