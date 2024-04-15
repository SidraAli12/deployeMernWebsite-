require('dotenv').config();
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
const express = require('express');

const app = express(); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qebaged.mongodb.net/`, {
    useNewUrlParser: true // To avoid unnecessary warning
}).then(() => {
    console.log("Connection Successful")
}).catch((e)=>{
    console.log(e)
})
