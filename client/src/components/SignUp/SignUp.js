import React, { useState } from "react";
import styles from "./SignUp.module.css";
import Modal from "../Modal/Modal";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

const SignUp = ({ toggle_sign_up, open, sign_up }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const update = fn => e => {
    fn(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    sign_up({ email, name, password, confirm_password: confirmPassword });
  };

  const handleSignUp = () => {
    console.log("Sign Up");
  };

  return (
    <Modal toggle={toggle_sign_up} open={open}>
      <p className={styles.header}>Sign Up</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <FormInput
          type="text"
          label="Username"
          value={name}
          onChange={update(setName)}
        />
        <FormInput
          type="email"
          label="Email"
          value={email}
          onChange={update(setEmail)}
        />
        <FormInput
          type="password"
          label="Password"
          value={password}
          onChange={update(setPassword)}
        />
        <FormInput
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          onChange={update(setConfirmPassword)}
        />
        <Button label="Sign up" />
      </form>
      <div className={styles.footer}>
        <span className={styles.already}>Already a Redditor?</span>
        <span className={styles.signin__link} onClick={handleSignUp}>
          log in
        </span>
      </div>
    </Modal>
  );
};

export default SignUp;
