const mongoose=require("mongoose")

const postsSchema= mongoose.Schema({

    name : String,
notes : String,
assign : String,
status: String,
},
{ versionKey: false })

const PostsModel=mongoose.model("linkedinpost", postsSchema)


module.exports={
    PostsModel
}