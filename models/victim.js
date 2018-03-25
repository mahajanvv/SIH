var mongoose=require('mongoose');
var express =require('express');
var victimSchema=mongoose.Schema({
    refPoliceId:{
        type:String
    },
    refUserId:{
        type:String
    },
    refCrimeId:{
        type:String
    },
    policeMsg:{
        type :[String],
        index :'3d'
    },
    progress:{
        type:Number,
        default:0
    }
});
const Victim=module.exports=mongoose.model('Victim',victimSchema);


