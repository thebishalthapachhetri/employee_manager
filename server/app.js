
const express = require('express')
const app = express()
const bodyParser =require('body-parser')
const mangoose = require('mongoose')

//mongodbusername= cnq
//mongodbpassword =f2zicPmSA0pB6wgb

const mangoUri ="mongodb+srv://cnq:f2zicPmSA0pB6wgb@cluster0.0xax6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.get('/',(req,res)=>{

    res.send("welcome to node")
})


app.listen(3000,()=>{

    console.log("server running")
})