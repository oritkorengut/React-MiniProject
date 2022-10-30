let mongoose=require('mongoose')
let subsSchema=new mongoose.Schema({
    Name:String,
    MovieID:String,
    MemberID:String,
    Date:String
})
const model = mongoose.model("subs", subsSchema)
module.exports = model