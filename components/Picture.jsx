import React from "react";
import styles from "../styles/Picture.module.css";

const Picture = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center">
        <h1 className={styles.title}>Hình ảnh</h1>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <div className="row justify-content-md-center justify-content-sm-center">
          <img
            className={styles.image + " col-md-4 col-sm-12 col-xs-12"}
            src="img_2.jpg"
            alt=""
          />
          <img
            className={styles.image + " col-md-4 col-sm-12 col-xs-12"}
            src="img_1.png"
            alt=""
          />
          <img
            className={styles.image + " col-md-4 col-sm-12 col-xs-12"}
            src="img_3.png"
            alt=""
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <div className="row justify-content-md-center justify-content-sm-center">
          <img
            className={styles.image + " col-md-3 col-sm-12 col-xs-12"}
            src="img_4.png"
            alt=""
          />
          <img
            className={styles.image + " col-md-3 col-sm-12 col-xs-12"}
            src="img_5.png"
            alt=""
          />
          <img
            className={styles.image + " col-md-3 col-sm-12 col-xs-12"}
            src="img_6.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="d-flex justify-content-center justify-content-sm-center mb-5">
        <img
          className={"col-md-12 h-75 w-75"}
          // style={{ height: "600px" }}
          src="img_7.jpg"
          alt=""
        />
      </div>
      {/* <div className="d-flex justify-content-center">
        <div className="row justify-content-md-center">
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
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Picture;
