const Joi = require("joi");

const studentSchema = {
  studentBody: Joi.object().keys({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    email: Joi.string().required(),
    pasword: Joi.string().required(),
    role: Joi.string()
  }),
  studentParam : Joi.object().keys({
    sid: Joi.string().optional()
  })
};

module.exports = studentSchema;
