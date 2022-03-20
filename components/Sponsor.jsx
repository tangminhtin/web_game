import React from "react";
import styles from "../styles/Sponsor.module.css";

const Sponsor = () => {
  return (
    <div className={styles.donateMain + " container text-center mt-5"}>
      <h1 className={styles.title}>DONATE</h1>
      <div className={styles.sponsor}>
        <div className="container">
          <div className={styles.box + " col"}>
            <div className={styles.button}>
              <button
                className={styles.donateButton}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsevcb"
                aria-expanded="false"
              >
                <span>
                  Gói ủng hộ tinh thần
                  <i className="bi bi-caret-down-fill ps-2"></i>
                </span>
              </button>
            </div>

            <div className="collapse" id="collapsevcb">
              <div className={styles.text + " card card-body"}>
                Bạn nhận lại: 1, 2, 5, 10 niềm vui vì đã ủng hộ một tựa game
                Việt
                <div className="row text-center">
                  <div className={"col-6"}>
                    <img className={styles.image} src={"/10k.png"} />
                    10.000
                  </div>
                  <div className={"col-6"}>
                    <img className={styles.image} src={"/20k.png"} />
                    20.000
                  </div>
                  <div className={"col-6"}>
                    <img className={styles.image} src={"/50k.png"} />
                    50.000
                  </div>
                  <div className={"col-6"}>
                    <img className={styles.image} src={"/100k.png"} />
                    100.000
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className={"col-6"}>
                <img className={styles.image} src={"/100k.png"} />
              </div>
              <div className={"col-6"}>
                <b>10.000 20.000 50.000 100.000</b>
                <button
                  className={styles.donate}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Ủng hộ ngay
                </button>
              </div>
            </div>
          </div>

          <div className={styles.box + " col"}>
            <button
              className={styles.donateButton}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsetcb"
              aria-expanded="false"
            >
              <span>
                Gói ủng hộ trung cấp
                <i className="bi bi-caret-down-fill ps-2"></i>
              </span>
            </button>

            <div className="collapse" id="collapsetcb">
              <div className={styles.text + " card card-body"}>
                Bạn được ghi tên lên 1 tảng đá, cái cây,... trong game
              </div>
            </div>

            <div className="row">
              <div className={"col-6"}>
                <img className={styles.image} src={"/200k.png"} />
              </div>
              <div className={"col-6"}>
                <b>200.000</b>
                <button
                  className={styles.donate}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Ủng hộ ngay
                </button>
              </div>
            </div>
          </div>

          <div className={styles.box + " col"}>
            <button
              className={styles.donateButton}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsebidv"
              aria-expanded="false"
            >
              <span>
                Gói ủng hộ trung cấp
                <i className="bi bi-caret-down-fill ps-2"></i>
              </span>
            </button>

            <div className="collapse" id="collapsebidv">
              <div className={styles.text + " card card-body"}>
                Bạn được ghi tên lên 1 cái cây và 1 poster cảm ơn từ nhà sản xuất
              </div>
            </div>

            <div className="row">
              <div className={"col-6"}>
                <img className={styles.image} src={"/500k.png"} />
              </div>
              <div className={"col-6"}>
                <b>500.000</b>
                <button
                  className={styles.donate}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Ủng hộ ngay
                </button>
              </div>
            </div>
          </div>

          <div className={styles.box + " col"}>
            <button
              className={styles.donateButton}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapcaocap"
              aria-expanded="false"
            >
              <span>
                Gói ủng hộ cao cấp
                <i className="bi bi-caret-down-fill ps-2"></i>
              </span>
            </button>

            <div className="collapse" id="collapcaocap">
              <div className={styles.text + " card card-body"}>
                Bạn được ghi tên lên 1 cái cây. <br />
                Nhận poster cảm ơn từ nhà sản xuất và 1 quyển artbook
              </div>
            </div>
            <b>2.000.000</b>
            <div className="row">
              {/* <div className={"col-6"}> */}
              {/* <img className={styles.image} src={"/500k.png"} /> */}
              {/* </div> */}
              <div className={"col-12"}>
                <button
                  className={styles.donate}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Ủng hộ ngay
                </button>
              </div>
            </div>
          </div>
          <div className={styles.box + " col"}>
            <button
              className={styles.donateButton}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapvang"
              aria-expanded="false"
            >
              <span>
                Gói ủng hộ vàng
                <i className="bi bi-caret-down-fill ps-2"></i>
              </span>
            </button>

            <div className="collapse" id="collapvang">
              <div className={styles.text + " card card-body"}>
                Bạn được ghi tên lên 1 cái cây <br />
                nhận poster cảm ơn từ nhà sản xuất <br />1 quyển artbook và quyền thiết kế 1
                trang phục trong game
              </div>
            </div>
            <b>5.000.000</b>
            <div className="row">
              {/* <div className={"col-6"}> */}
              {/* <img className={styles.image} src={"/500k.png"} /> */}
              {/* </div> */}
              <div className={"col-12"}>
                <button
                  className={styles.donate}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Ủng hộ ngay
                </button>
              </div>
            </div>
          </div>
          <div className={styles.box + " col"}>
            <button
              className={styles.donateButton}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapkimcuong"
              aria-expanded="false"
            >
              <span>
                Gói ủng hộ kim cương
                <i className="bi bi-caret-down-fill ps-2"></i>
              </span>
            </button>

            <div className="collapse" id="collapkimcuong">
              <div className={styles.text + " card card-body"}>
                Ghi tên lên 1 cái cây <br />
                Poster cảm ơn từ nsx <br />1 quyển artbook và quyền thiết kế 1
                nhân vật trong game
              </div>
            </div>
            <b>10.000.000</b>
            <div className="row">
              {/* <div className={"col-6"}> */}
              {/* <img className={styles.image} src={"/500k.png"} /> */}
              {/* </div> */}
              <div className={"col-12"}>
                <button
                  className={styles.donate}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Ủng hộ ngay
                </button>
              </div>
            </div>
          </div>
          <div className={styles.box + " col"}>
            <button
              className={styles.donateButton}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapvibranium"
              aria-expanded="false"
            >
              <span>
                Gói ủng hộ Vibranium
                <i className="bi bi-caret-down-fill ps-2"></i>
              </span>
            </button>

            <div className="collapse" id="collapvibranium">
              <div className={styles.text + " card card-body"}>
                Bạn được ghi tên lên 1 cái cây <br />
                nhận poster cảm ơn từ nhà sản xuất <br />
                1 quyển artbook
                <br />
                quyền thiết kế 1 nhân vật trong game và quyền thiết kế 1 mini
                map trong game
              </div>
            </div>
            <b>20.000.000</b>
            <div className="row">
              {/* <div className={"col-6"}> */}
              {/* <img className={styles.image} src={"/500k.png"} /> */}
              {/* </div> */}
              <div className={"col-12"}>
                <button
                  className={styles.donate}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Ủng hộ ngay
                </button>
              </div>
            </div>
          </div>
          <div className={styles.box + " col"}>
            <button
              className={styles.donateButton}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collaptoithuong"
              aria-expanded="false"
            >
              <span>
                Gói ủng hộ tối thượng
                <i className="bi bi-caret-down-fill ps-2"></i>
              </span>
            </button>

            <div className="collapse" id="collaptoithuong">
              <div className={styles.text + " card card-body"}>
                Bạn được ghi tên lên 1 cái cây <br />
                nhận poster cảm ơn từ nsx <br />
                1 quyển artbook <br />
                quyền thiết kế 1 nhân vật trong game và quyền thiết kế 1 nhánh
                truyện trong game
              </div>
            </div>
            <b>50.000.000</b>
            <div className="row">
              {/* <div className={"col-6"}> */}
              {/* <img className={styles.image} src={"/500k.png"} /> */}
              {/* </div> */}
              <div className={"col-12"}>
                <button
                  className={styles.donate}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Ủng hộ ngay
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Ủng hộ
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <b>Chuyển tiền với nội dung: IAdonate + số điện thoại</b> <br />
                vào tài khoản MOMO hoặc tài khoản ngân hàng: <br/>
                BIDV: 21510002869743 <br/>
                Lo Anh Duc chi nhánh CAU GIAY<br/><br/>
                Với các mốc ủng hộ lớn hơn 500.000 xin liên hệ: <br />
                Mr.Anh Đức <br/>
                0326919071 <br />
                loanhduc0102@gmail.com <br/>
                <b>trước khi chuyển tiền</b>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Không
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Đồng ý
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
