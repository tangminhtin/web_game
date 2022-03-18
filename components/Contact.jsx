import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact + " container-fluid"}>
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <h1 className="text-white mt-3 mb-4">Liên hệ</h1>
          <p>
            Sản phẩm được hợp tác phát hành bởi Công ty TNHH Liên Minh Huyền
            Thoại & Công ty Cổ phần Giải trí và Thể thao Điện tử Việt Nam.
          </p>
          <p>
            Văn phòng đại diện: Tầng 29, tòa nhà Trung tâm Lotte Hà Nội, số 54
            đường Liễu Giai, phường Cống Vị, quận Ba Đình, thành phố Hà Nội,
            Việt Nam.
          </p>
          <p>Điện thoại: (04)7305-3939; Fax: (04)3759-2429</p>
          <p>Email: youremail@gmail.com</p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <a href="#">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="#">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="#">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="#">
          <i class="bi bi-youtube"></i>
        </a>
      </div>
      <div className="d-flex justify-content-center">
        <a href="#" className={styles.card}>
          Chơi miễn phí
        </a>
        <img className={styles.card} src="card2.png" alt="" />
      </div>
    </div>
  );
};

export default Contact;
