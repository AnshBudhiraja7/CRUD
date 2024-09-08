const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    }
})
const productModel= mongoose.model("users",productSchema)
module.exports=productModel