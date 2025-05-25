const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title : {type : String, required :true},
    description: String,
    author : {type : String, required :true},
    price : {type : Number , required : true},
    category: String,
    stock :{type : Number , default : 0},
    coverImage : String,
    publishedDate : Date,
    isFeatured :{type: Boolean, default: false}
},{timestamps:true});

module.exports = mongoose.model('Book', bookSchema);