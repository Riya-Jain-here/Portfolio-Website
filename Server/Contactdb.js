const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const ContactModel =require('./Models/Contact')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/profilecontactdb')

app.post('/Contact',(req,res)=>{
    const {name,email, message}=req.body;
    ContactModel.create({name:name,email:email,message:message})
    .then(result=>res.json("Query Sent."))
    .catch(err=>res.json("err"))
})

app.listen(3001,()=>{
    console.log("Database Connect successfully.")
})