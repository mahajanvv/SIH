var mongoose=require('mongoose');
var express =require('express');
var crimeSchema=mongoose.Schema({
    crimetypeID:{
        type: String,
        required:true
    },
    policestationID:{
        type :String,
        required:true
    },
    address :{
        type:String,
        required:true
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
        type:String,
        required:true
    },
    create_date:{
        type :Date,
        default:Date.now
    },
    latlong:{
        type :[Number],
        index :'2d'
    }
});
const crime=module.exports=mongoose.model('Crime',crimeSchema,'Crime');
