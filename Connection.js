const mongoose=require("mongoose")
const Connection=async()=>{
try {
    await mongoose.connect("mongodb+srv://Anshbudhiraja:Ansh%401401@clusters.ojxlk.mongodb.net/Flipkart?retryWrites=true&w=majority&appName=Clusters")
    console.log("connected to Mongodb");  
} catch (error) {
    console.log("Error occured in Connection:"+error)
}
}
module.exports=Connection