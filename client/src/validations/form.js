import validator from "validator";

export const validateName = name => {
  let message = null;
  if (!validator.isLength(name, { min: 3, max: 20 })) {
    message = "Username must be between 3 and 20 characters";
  }
  if (validator.isEmpty(name)) {
    message = "Username is required";
  }
  return { valid: message === null, message };
};

export const validateEmail = email => {
  let message = null;
  if (!validator.isEmail(email)) {
    message = "Email is invalid";
  }
  if (validator.isEmpty(email)) {
    message = "Email is required";
  }
  return { valid: message === null, message };
};

export const validatePassword = password => {
  let message = null;
  if (!validator.isLength(password, { min: 6 })) {
    message = "Password must be at least 6 characters long";
  }
  if (validator.isEmpty(password)) {
    message = "Password is required";
  }
  return { valid: message === null, message };
};
