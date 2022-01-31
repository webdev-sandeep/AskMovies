//Imports
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const port = process.env.PORT


//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('uploads'))


//Database Connection
mongoose.connect(process.env.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(()=>console.log('Connected to the database!')).catch((err)=>console.log(err))

//Routes Prefix
app.use('/api/post',require('./routes/routes'))

if(process.env.NODE_ENV === "production"){
    app.use(express.static(__dirname+'/dist/'))
    app.get("*",(req,res)=>{
        res.sendFile(__dirname+"/dist/index.html")
    })
}

//start server
app.listen(port,console.log(`server running at http://localhost:${port}`))