const Joi = require('joi');  
const createuserSchema = Joi.object({
    userName: Joi.string().min(3).max(20).required(),
    fields : Joi.string().optional().valid('nodejs',"MernStack developer",'frontend',"web development","data science","php","adminitration").required(),
    email: Joi.string().min(6).required(),
    password: Joi.string().required(),
}).unknown(false);
module.exports = {
    createuserSchema
  };