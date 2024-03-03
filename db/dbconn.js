const mongoose=require("mongoose")
const user=process.env.USER_OF_MONGO
const password=process.env.PASSWORD_OF_MONGO
const uri = `mongodb+srv://${user}:${password}@atlascluster.gw1or1c.mongodb.net/portfolio?retryWrites=true&w=majority`;

const db=async()=>{
    try{
        await mongoose.connect(uri)
        console.log("database connected")
    }catch(err){
        console.log(err)
    }
}
module.exports=db