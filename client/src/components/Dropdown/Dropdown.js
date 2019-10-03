import React from "react";
import styles from "./Dropdown.module.css";
import { FaUser, FaSortDown } from "react-icons/fa";

const Dropdown = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <FaUser size="1rem" className={styles.user_icon} />
        <FaSortDown size="1rem" />
      </button>
    </div>
  );
};

export default Dropdown;
