import React from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import styles from "./Modal.module.css";

const Modal = ({ children, toggle, open }) => {
  return open
    ? createPortal(
        <div className={styles.container}>
          <div className={styles.modal}>
            <div className={styles.header}>
              <button className={styles.close} onClick={toggle}>
                <FaTimes />
              </button>
            </div>
            <div className={styles.content}>{children}</div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
