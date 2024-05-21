const express = require("express")
const app = express()
const path = require("path")
const mongoose = require('mongoose')
const operation = require("./model/message.model.js")
app.use(express.json())
app.use(express.static(path.join(__dirname,"./public")))


app.post('/post', async(req,res)=>{
    try {
        const product = await operation.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
})


app.get('/post', async(req,res)=>{
    try {
        const product = await operation.find({})
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
})



app.listen(3000,()=>{
    mongoose.connect('mongodb+srv://manohar2004gr:5DFpcNwqPVvyLaww@testapi.unppitm.mongodb.net/?retryWrites=true&w=majority&appName=TestApi')
    .then(()=>{
        console.log('connected!')
    })
    .catch((error)=>{
        console.log(error)
    })
    console.log("app listening on port 3000")
})