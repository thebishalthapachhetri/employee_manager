
const express = require('express')
const app = express()
const bodyParser =require('body-parser')
const mongoose = require('mongoose')

require('./Employee')

app.use(bodyParser.json())

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


    Employee.find({}).then(data=>{

        res.send(data)
    })
    .catch(err=>{
        console.log(err)

    })


    
})

app.post('/send-data',(req,res)=>{

    const employee = new Employee({

        name:req.body.name,
        position:req.body.position,
        email:req.body.email,
        phone:req.body.phone,
        salary:req.body.salary,
        picture:req.body.picture
        
    })

    employee.save()
    .then(data=>{

        console.log(data)

        res.send(data)
    }).catch(err=>{
        console.log(err)

    })
    
    
})

app.post('/delete',(req,res)=>{


    Employee.findByIdAndRemove(req.body._id)
    .then(data=>{

        console.log(data)
        res.send(data)
    })
    .catch(err=>{
        console.log(err)

    })
})

app.post('/update',(req,res)=>{

    Employee.findByIdAndUpdate(req.body._id, {

        name:req.body.name,
        position:req.body.position,
        email:req.body.email,
        phone:req.body.phone,
        salary:req.body.salary,
        picture:req.body.picture

    
    }).then(data=>{

        console.log(data)
        res.send(data)

    })
    .catch(err=>{

        console.log(err)
    })
    

})

app.listen(3000,()=>{

    console.log("server running")
})