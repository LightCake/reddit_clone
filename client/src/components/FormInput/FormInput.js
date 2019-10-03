import React, { useRef } from "react";
import styles from "./FormInput.module.css";

const FormInput = ({ type, value, onChange, label }) => {
  const inputEl = useRef(null);

  const handleClick = () => {
    inputEl.current.focus();
  };
  return (
    <div className={styles.container} onClick={handleClick}>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        ref={inputEl}
        placeholder=" "
      />
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default FormInput;
