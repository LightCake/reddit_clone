import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, onClick, label, black }) => {
  return (
    <button
      className={`${styles.button} ${black ? styles.black : styles.grey}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
