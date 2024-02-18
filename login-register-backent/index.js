import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/myLoginRegisterDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log("DB connected")
});

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User = new mongoose.model("User",userSchema)



//Routes
app.post("/login",(req,res)=>{
    const {email, password} = req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message: "Login Successfully",user:user})
            }
            else{
                res.send({message: "Password incorrect"})
            }
        }
        else{
            res.send({message: "User not found"})
        }
    })
})
app.post("/register",(req,res)=>{
    const {name,email,password} = req.body
    User.findOne({email:email}, (err,user)=>{
        if(user){
            res.send({message: "User already registered"})
        }
        else{
             //creation of database
            const user = new User({
                name,
                email,
                password
            })
            user.save(err =>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message: "Successfully Register"})
                }
            })
        }
    })
    
   
   
})
app.listen(9002,() =>{
    console.log("BE started at port 9002")
})