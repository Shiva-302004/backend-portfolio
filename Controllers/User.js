const validator=require("validator")
const Contact=require("../model/contact")
// const main =require("../nodemailer/nodemailer")
const nodemailer=require("nodemailer")
const GMAIL_PASSWORD=process.env.GMAIL_PASSWORD
const USER_EMAIL=process.env.USER_EMAIL
const contactuserdetails=async(req,res)=>{
    const {name,subject,message,phone,email}=req.body
    if(!name) res.status(400).json({msg:"name feild is required"})
    if(!email) res.status(400).json({msg:"email feild is required"})
    if(!subject) res.status(400).json({msg:"subject feild is required"})
    if(!message) res.status(400).json({msg:"message feild is required"})
    if(!phone) res.status(400).json({msg:"phone feild is required"})
    if(phone.length<10 || phone.length>10) res.status(400).json({msg:"enter valid phone number"})
    if(!validator.isEmail(email)){
        res.status(400).json({
            msg:"enter valid email",
            success:false
        })
    }else{
        const data=new Contact({name,email,subject,message,phone})
        const userdata=await data.save()
        if(userdata._id){
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                auth: {
                  user: USER_EMAIL,
                  pass: GMAIL_PASSWORD,
                },
            });
            async function main(email) {
               
                const info = await transporter.sendMail({
                  from: {
                    name:"shiva verma",
                    address:USER_EMAIL
                  },
                  to: userdata.email, 
                  subject: "Hello ✔", 
                  text: "Hello world?", 
                  html: "<b>thank you contacting shiva verma.he will reply you soon</b>",
                });
                console.log("Message sent: %s", info.messageId);
              }
              main().catch(console.error)
        }
        res.status(200).json({
            data:userdata,
            success:true,
            msg:"message sent successfully"
        })
    }
}
module.exports=contactuserdetails