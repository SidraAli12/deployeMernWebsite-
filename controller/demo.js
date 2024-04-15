require('dotenv').config();
const {user} = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var { ObjectId } = require("mongodb");
const {createuserSchema}=require("../validation/user.js")

// The rest of your code...

//verifysignup
const verifySignup = async (req, res) => {
    try {
        await createuserSchema.validateAsync(req.body);
      // Check if user with provided email exists
      const userSignup = await user.findOne({ email: req.body.email });
      if (userSignup ) {
        return res.status(400).send({
          response: 400,
          message: "Email already registered",
          status: false,
        });
      }
  
      const adduser = new user(req.body);
      var encryptedPassword = await bcrypt.hash(adduser.password, 10);
      adduser.password = encryptedPassword;
      let insertuser = await adduser.save();
      
      // Generate token
      const token = jwt.sign(
        {
          email: adduser.email,
          _id: adduser._id,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );
  
      let tokens = token;
      let helperfunction = () => {
        let response = res.statusCode;
        let messages = "Sign-up Successful";
        let status = true;
        let Data = { name: req.body.name, tokens };
        return res
          .status(201)
          .send({
            response: response,
            message: messages,
            status: status,
            Data: Data,
          });
      };
      helperfunction();
    } catch (error) {
      console.log("Error caught:", error);
      if (error.isJoi) {
        return res.status(400).send({
          response: 400,
          message: "Validation error",
          status: false,
          errors: error.details.map((err) => err.message),
        });
      }
  
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };

  //Signin
  const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            return res.status(400).send("All input is required");
        }
        const foundUser = await user.findOne({ email: email });
        if (foundUser && (await bcrypt.compare(password, foundUser.password))) {
            const token = jwt.sign(
                {
                    _id: foundUser._id,
                    email: foundUser.email,
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "24h",
                }
            );
            var tokens = token;
            let helperfunction = () => {
                let response = res.statusCode;
                let messages = "Login Successful ";
                let status = true;
                let Data = { name: foundUser.userName, tokens };
                return res
                    .status(200)
                    .send({
                        response: response,
                        message: messages,
                        status: status,
                        Data: Data,
                    });
            };
            helperfunction();
        } else {
            return res.status(400).send("Invalid Credentials");
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};





  module.exports={verifySignup,login}