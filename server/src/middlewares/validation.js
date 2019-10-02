const Joi = require("@hapi/joi");

// Contains all schemas for validations
const schemas = {
  signup: Joi.object({
    name: Joi.string()
      .alphanum()
      .min(3)
      .max(20)
      .required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required(),
    confirm_password: Joi.ref("password")
  }),
  signin: Joi.object({
    name: Joi.string()
      .alphanum()
      .min(3)
      .max(20)
      .required(),
    password: Joi.string().required()
  }),
  post: Joi.object({
    title: Joi.string()
      .min(1)
      .max(300)
      .required(),
    text: Joi.string().max(40000)
  })
};

// Validation middleware
const check = (schema, property) => (req, res, next) => {
  const { error } = schema.validate(req[property], { abortEarly: false });
  // If no error occured the input is valid.
  const valid = error === undefined;
  // If the input is valid go to the next middleware.
  if (valid) {
    next();
  } else {
    // If any error occured, send the error message to the client.
    const errors = error.details.reduce((acc, error) => {
      acc[error.path] = error.message;
      return acc;
    }, {});
    res.status(400).send(errors);
  }
};

module.exports = {
  schemas,
  check
};
