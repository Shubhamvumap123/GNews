const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    content:{type:String,required:true},

},{
    versionKey:false,
    timestamp:true,
})
const news = mongoose.model("news", newsSchema);
module.exports = news