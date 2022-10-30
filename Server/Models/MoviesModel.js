
let mongoose=require('mongoose')
let moviesSchema=new mongoose.Schema({
    Name:String,
    YearPremiered:Number,
    Genres:[String],
    AnImageUrl:String,


})
const model = mongoose.model("movies", moviesSchema)
module.exports = model