import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact + " container-fluid"}>
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <h1 className="text-white mt-3 mb-4">Liên hệ</h1>
          <p>Điện thoại: 0326919071 Mr Anh Đức</p>
          <p>Email: loanhduc0102@gmail.com</p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <a href="https://www.facebook.com/LillusionTheory">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="#">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="#">
          <i className="bi bi-youtube"></i>
        </a>
      </div>
      <div className="d-flex justify-content-center">
        <a href="#" className={styles.card}>
          Phát hành trên Steam
        </a>
        <img className={styles.card} src="card2.png" alt="" />
      </div>
    </div>
  );
};

export default Contact;
