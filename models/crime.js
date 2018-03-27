var mongoose=require('mongoose');
var express =require('express');
var crimeSchema=mongoose.Schema({
    crimetypeID:{
        type: String
    },
    policestationID:{
        type :String,
        required:true
    },
    address :{
        type:String
    },
    city_code:{
        type:String
    },
    title :{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    status :{
        type:Boolean,
        default:false
    },
    create_date:{
        type :Date,
        default:Date.now
    },
    modify_date:{
        type :Date,
        default:null
    },
    crime_date:{
        type :Date
    },
    news_url:{
       type:[String]
    },
    latlong:{
        type :[Number],
        index :'2d'
    }
});

const Crime=module.exports=mongoose.model('Crime',crimeSchema,'Crime');


module.exports.updateCrime = function(id,crime,callback){
    var quer = {_id:id};
    var update ={
        crimetypeID :crime.crimetypeID,
        policestationID:crime.policestationID,
        address:crime.address,
        city_code:crime.city_code,
        title:crime.title,
        description:crime.description,
        status :crime.status,
        create_date:crime.create_date,
        modify_date:Date.now,
        latlong :crime.latlong
    }
    
    Crime.findOneAndUpdate(quer,update,callback);
}