const Connection=require("./Connection")
const schemas=require("./Schema")
const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config()
const app=express()
app.use(express.json())
app.use(cors())
Connection()

app.post("/CreateUser",async(req,resp)=>{
    try {
    const {Name,Phone}=req.body
    if(Name && Phone)
    {
        const result=await schemas.create({Name,Phone})
       return resp.status(201).send({result,Message:"Saved Successfully"})  
    }
    return resp.status(404).send({Message:"Field is Empty"})
    } catch (error) {
    return resp.status(500).send({Message:"Internal Server Error"})  
    }  
})
app.get("/ShowUsers",async(req,resp)=>{
    try {
    const result=await schemas.find()
    return resp.status(201).send({result,Message:"Fetched Successfully"})
    } catch (error) {
    return resp.status(500).send({Message:"Internal Server Error"})     
    }
})
app.delete("/DeleteUser",async(req,resp)=>{
    try {
    const result=await schemas.deleteOne({_id:req.body.id})
    return resp.status(201).send({result,Message:"Deleted Successfully"})
    } catch (error) {
    return resp.status(500).send({Message:"Internal Server Error"})     
    }  
})
app.put("/UpdateUser",async(req,resp)=>{
   try {
    const result=await schemas.updateOne({_id:req.body.id},{$set:req.body.data})
    return resp.status(201).send({result,Message:"Updated Successfully"})  
   } catch (error) {
    return resp.status(500).send({Message:"Internal Server Error"})  
   }
})
app.listen(process.env.PORT || 3010,()=>{
    console.log("Server Started At:"+process.env.PORT || 3010);  
})