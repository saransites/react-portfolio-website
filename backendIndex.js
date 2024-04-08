const express=require('express')
const nodemailer=require("nodemailer")
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json())
const path=require("path")


const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "sarannatarajan7@gmail.com",
    pass: "uquw urnp jxxm ehao",
  },
});

app.get('/',(req,res)=>{
  app.use(express.static(path.resolve( __dirname,"FrontEnd","dist")))
  res.sendFile(path.resolve(__dirname,"FrontEnd","dist","index.html"))
})
app.post('/sendemail',(req,res)=>{
    const { name,email,message }=req.body

    const mailOption = {
      from: "Saran <sarannatarajan7@gmail.com>",
      to:email,
      subject:`Message From ${name}`,
      text: message
    };
    transporter.sendMail(mailOption,(err,info)=>{
        if(err){
          res.send(err)
            return console.log(err)
        }
        res.send('message sent successfully')
        console.log('message sent successfully',info.messageId)
    })
})
app.listen(5000,()=>{
    console.log("server started...")
})