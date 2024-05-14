const mongoose = require('mongoose');

const propSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    model:{
        type:Number,
        required:true
    },
    variant:{
        type:String,
        required:true
    },
    transmission:{
        type:String,
        required:true
    },
    engine:{
        type:String,
        required:true
    },
    power:{
        type:String,
        required:true
    },
    kilometers:{
        type:String,
        required:true
    },
    owner:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    startTime:{
        type:Date,
    },
    endTime:{
        type:Date,
    },
    activity:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
    },
    images:[{
        type:String
    }]
})

module.exports = mongoose.model('Car', propSchema)