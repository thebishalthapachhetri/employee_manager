
const express = require('express')
const app = express()
const bodyParser =require('body-parser')
const mongoose = require('mongoose')

require('./Employee')

//mongodbusername= cnq
//mongodbpassword =f2zicPmSA0pB6wgb

const Employee = mongoose.model("employee")

const mongoUri ="mongodb+srv://cnq:f2zicPmSA0pB6wgb@cluster0.0xax6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoUri,{

    useNewUrlParser:true,
    useUnifiedTopology:true
})


mongoose.connection.on("connected",()=>{

    console.log("connected to mongo")
})

mongoose.connection.on("error",(err)=>{

    console.log("unable to connect",err)
})



app.get('/',(req,res)=>{

    res.send("welcome to node")
})


app.listen(3000,()=>{

    console.log("server running")
})