const mongoose=require("mongoose")

const usersSchema= mongoose.Schema({

    name:String,
    email:String,
  
    password:String,
   

},
{ versionKey: false })

const UsersModel=mongoose.model("linkedinuser", usersSchema)
module.exports={
    UsersModel
}