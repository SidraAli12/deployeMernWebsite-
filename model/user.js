const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_Schema = new mongoose.Schema({
  userName: {
   type:String,
    required: true,
  },
  email: {
    type:String,
     required: true,
   },
   password: {
    type:String,
     required: true,
   },
   fields: {
    type:String,
     required: true,
   },
  
});

const user = new mongoose.model("user", user_Schema);

//export collection
module.exports = { user };