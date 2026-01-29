const express = require('express');
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

const port = process.env.PORT
const MONGO_URI = process.env.URI

mongoose.connect(MONGO_URI)
.then(()=>{
    console.log('DB is connected');
})
.catch((err)=>{
    console.log('DB failed to connect', err);
})

app.get('/', (req,res)=>{
    res.send({message: "Slash has been accessed"})
})


app.listen(port, ()=>{
    console.log(`Lift off! Server started at ${port}`);
})