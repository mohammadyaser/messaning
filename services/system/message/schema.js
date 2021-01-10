const Joi = require("joi");

const testSchema = {
  testOne: Joi.object().keys({
    title: Joi.string().required(),
  }),
  testTwo : Joi.object().keys({
    uid: Joi.string().optional()
  })
};

module.exports = testSchema;
