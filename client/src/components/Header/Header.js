import React from "react";
import { Link } from "react-router-dom";
import { FaReddit } from "react-icons/fa";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

const Header = ({ toggle_sign_in, toggle_sign_up }) => {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo__container}>
        <FaReddit size="2.3rem" className={styles.logo} />
      </Link>
      <div className={styles.group}>
        <Button label="log in" black={true} onClick={toggle_sign_in} />
        <Button label="sign up" onClick={toggle_sign_up} />
        <Dropdown />
      </div>
    </div>
  );
};

export default Header;
