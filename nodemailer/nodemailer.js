const dotenv=require("dotenv")
dotenv.config()
const nodemailer=require("nodemailer")
const GMAIL_PASSWORD=process.env.GMAIL_PASSWORD
const USER_EMAIL=process.env.USER_EMAIL
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
      to: "shivavermashopping@gmail.com", 
      subject: "Hello ✔", 
      text: "Hello world?", 
      html: "<b>Hello world?</b>",
    });
    console.log("Message sent: %s", info.messageId);
  }
module.exports=main()