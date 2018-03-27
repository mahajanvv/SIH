var mongoose=require('mongoose');
var express =require('express');
var StatSchema=mongoose.Schema({
    PoliceId:{
        type:String
    },
    Murder:{
        type:Number,
        default:0
    },
    Robbery:{
        type:Number,
        default:0
    },
    Drugs_Alcohol:{
        type:Number,
        default:0
    },
    Domestic_voilence:{
        type:Number,
        default:0
    },
    sex_crimes:{
        type:Number,
        default:0
    },
    Drink_Drive:{
        type:Number,
        default:0
    },
    vandalism:{
        type:Number,
        default:0
    },
    smuggling:{
        type:Number,
        default:0
    },
    kidnapping:{
        type:Number,
        default:0
    },
    cybercrime:{
        type:Number,
        default:0
    },
    poaching:{
        type:Number,
        default:0
    },
    total:{
        type:Number,
        default:0
    },
    
});
const Stat=module.exports=mongoose.model('Stat',StatSchema);

module.exports.getstationcount = function(pid,crime, callback) {
    var cr=crime;
    console.log(crime);
    if(crime=='Murder')
        Stat.findOneAndUpdate({PoliceId:pid},{$inc: {Murder: 1,total:1 }},callback);
    else if(crime=='Robbery')
    Stat.findOneAndUpdate({PoliceId:pid},{$inc: {Robbery: 1,total:1 }},callback);
    else if(crime=='Drugs_Alcohol')
    Stat.findOneAndUpdate({PoliceId:pid},{$inc: {Drugs_Alcohol: 1,total:1 }},callback);
    else if(crime=='Domestic_voilence')
    Stat.findOneAndUpdate({PoliceId:pid},{$inc: {Domestic_voilence: 1,total:1 }},callback);
    else if(crime=='sex_crimes')
    Stat.findOneAndUpdate({PoliceId:pid},{$inc: {sex_crimes: 1,total:1 }},callback);
    else if(crime=='Drink_Drive')
    Stat.findOneAndUpdate({PoliceId:pid},{$inc: {Drink_Drive: 1,total:1 }},callback);
    else if(crime=='vandalism')
    Stat.findOneAndUpdate({PoliceId:pid},{$inc: {vandalism: 1,total:1 }},callback);
    else if(crime=='smuggling')
    Stat.findOneAndUpdate({PoliceId:pid},{$inc: {smuggling: 1,total:1 }},callback);
    else if(crime=='kidnapping')
    Stat.findOneAndUpdate({PoliceId:pid},{$inc: {kidnapping: 1,total:1 }},callback);
    else if(crime=='cybercrime')
    Stat.findOneAndUpdate({PoliceId:pid},{$inc: {cybercrime: 1,total:1 }},callback);
    else if(crime=='poaching')
    Stat.findOneAndUpdate({PoliceId:pid},{$inc: {poaching: 1,total:1 }},callback);

  }
