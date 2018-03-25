var mongoose=require('mongoose');
var express =require('express');

var crimeCitySchema=mongoose.Schema({
    city_code:{
        type: String,
        required:true
    },
    city_name:{
        type: String,
        required:true
    },
});

const CrimeCity=module.exports=mongoose.model('CrimeCity',crimeCitySchema);


module.exports.findCityCodeByCity = function(cityname, callback) {
    const query = {city_name:cityname}
    CrimeCity.findOne(query, callback);
  }
  

  