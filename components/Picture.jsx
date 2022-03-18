import React from "react";
import styles from "../styles/Picture.module.css";

const Picture = () => {
  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="d-flex justify-content-center">
        <h1 className={styles.title}>Hình ảnh</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row">
          <img
            className={styles.image}
            src="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/03_2022/BCPH-1.jpg"
            alt=""
          />
          <img
            className={styles.image}
            src="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/03_2022/BCPH-1.jpg"
            alt=""
          />
          <img
            className={styles.image}
            src="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/03_2022/BCPH-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row">
          <img
            className={styles.image}
            src="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/03_2022/BCPH-1.jpg"
            alt=""
          />
          <img
            className={styles.image}
            src="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/03_2022/BCPH-1.jpg"
            alt=""
          />
          <img
            className={styles.image}
            src="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/03_2022/BCPH-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Picture;
