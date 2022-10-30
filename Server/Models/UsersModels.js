let mongoose=require('mongoose')
let usersSchema=new mongoose.Schema({
    FullName:String,
    Username:String,
    Password:String

})
const model = mongoose.model("users", usersSchema)
module.exports = model