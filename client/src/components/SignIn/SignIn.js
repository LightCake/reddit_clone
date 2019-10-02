import React from "react";
import "./SignIn.module.css";
import { sign_in } from "../../actions/user";

const SignIn = () => {
  const handleClick = () => {
    sign_in({
      name: "Cake",
      password: "razer10"
    });
  };
  return <button onClick={handleClick}>Sign In</button>;
};

export default SignIn;
