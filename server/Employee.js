const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({

    name:String,
    position:String,
    email:String,
    phone:String,
    picture:String,
    salary:String


})

mongoose.model("employee",EmployeeSchema)