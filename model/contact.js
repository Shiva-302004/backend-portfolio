const mongoose=require("mongoose")

const contact=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        minLength:10,
        required:true
    }
})

const Contact=new mongoose.model("Portfoliocontact",contact)
module.exports=Contact