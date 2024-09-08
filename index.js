const Connection=require("./Connection")
const schemas=require("./Schema")
const express=require("express")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
Connection()

app.post("/CreateUser",async(req,resp)=>{
    const {Name,Phone}=req.body
    if(Name && Phone)
    {
        const result=await schemas.create({Name,Phone})
       return resp.status(201).send({result,Message:"Saved Successfully"})  
    }
    return resp.status(404).send({Message:"Field is Empty"})  
})
app.get("/ShowUsers",async(req,resp)=>{
    const result=await schemas.find()
    return resp.status(201).send({result,Message:"Fetched Successfully"})
})
app.delete("/DeleteUser",async(req,resp)=>{
    const result=await schemas.deleteOne({_id:req.body.id})
    return resp.status(201).send({result,Message:"Deleted Successfully"})  
})
app.put("/UpdateUser",async(req,resp)=>{
    const result=await schemas.updateOne({_id:req.body.id},{$set:req.body.data})
    return resp.status(201).send({result,Message:"Updated Successfully"})  
})
app.listen(3010)