const express=require("express")
const dotenv=require("dotenv")
const cors=require("cors")
dotenv.config()
const PORT=process.env.PORT
const app=express()
const db=require("../db/dbconn")
const route=require("../routes/routes")
app.use(express.json())
app.use(cors())
app.use(route)
db().then(
app.listen(PORT,()=>{
    console.log("server connected")
})).catch((err)=>{
    console.log(err)
})