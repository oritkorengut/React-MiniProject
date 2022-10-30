let mongoose=require('mongoose')
let membersSchema=new mongoose.Schema({
    Name:String,
    Email:String,
    City:String

})
const model = mongoose.model("members", membersSchema)
module.exports = model