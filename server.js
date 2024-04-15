const express = require('express');
const app = express();
const  path =require ('path');
const cors = require("cors");

app.use(cors())

require('dotenv').config();
const router = require('./router/router')
const port = process.env.PORT
require('./db/prob');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function(_,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"), function(err){
        res.status(500).send(err)
    })
})
const PORT=process.env.PORT || 8000;
app.use([router])

app.listen(PORT, () => {
    console.log(`Our Server is running at port ${PORT}`)
   
})