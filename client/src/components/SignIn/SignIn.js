import React, { useState } from "react";
import styles from "./SignIn.module.css";
import Modal from "../Modal/Modal";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

const SignIn = ({ toggle_sign_in, open }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const update = fn => e => {
    fn(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleSignUp = () => {
    console.log("Toggle signin and signup");
  };

  return (
    <Modal toggle={toggle_sign_in} open={open}>
      <p className={styles.header}>Sign In</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <FormInput
          type="text"
          label="Username"
          value={name}
          onChange={update(setName)}
        />
        <FormInput
          type="password"
          label="Password"
          value={password}
          onChange={update(setPassword)}
        />
        <Button label="Sign in" />
      </form>
      <div className={styles.footer}>
        <span className={styles.new}>New to Reddit?</span>
        <span className={styles.signup__link} onClick={handleSignUp}>
          sign up
        </span>
      </div>
    </Modal>
  );
};

export default SignIn;
