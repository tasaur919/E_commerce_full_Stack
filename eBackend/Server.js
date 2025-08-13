import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const app=express()
app.use(cors());
app.use(express.json())//parse body

//connect to mongoDB       use->  127.0.0.1 = localhost
mongoose.connect("mongodb://localhost:27017/rkdb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//create User Schema 
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

const User=mongoose.model('User',userSchema)

//For Register route

app.post("/register",async(req,res)=>{
    const {name,email,password}=req.body;
    const hashedPass=await bcrypt.hash(password,10);
    const newUser=new User({name,email,password:hashedPass})
    // const token =jwt.sign({id:user._id}, "Secret_key",{expiresIn:"1h"});
    res.json({message:"Register successfully"});
    await newUser.save();
})


//for Login route
app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});

    if(!user) return res.status(400).json({message:'User Not found'})

    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(400).json({message:'Invalid credentials'});

    const token =jwt.sign({id:user._id}, "Secret_key",{expiresIn:"1h"});
    res.json({message:"Login successfully",token});
})



app.listen(5000,()=>console.log("Server is running on port 5000")
);