const express=require("express")
const route=express.Router()
const contactuserdetails=require("../Controllers/User")
route.post("/api/v1/contactuser",contactuserdetails)
module.exports=route