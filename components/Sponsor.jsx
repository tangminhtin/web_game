import React from "react";
import styles from "../styles/Sponsor.module.css";
import OptionBox from "./OptionBox";
import { Col, Container, Row } from "react-bootstrap";
import customStyle from "../styles/Sponsor.module.css";
import optionBoxStyle from "../styles/OptionBox.module.css";
import Modal from "./Modal";

const Sponsor = () => {
  return (
    <div className={styles.donateMain + " container text-center mt-5"}>
      <h1 className={styles.title}>DONATE</h1>
      <div className={styles.sponsor}>
        <div className={styles.box}>
          <div className={styles.button}>
            <button
              className={styles.donateButton}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsevcb"
              aria-expanded="false"
            >
              <span>
                $5 Gói ủng hộ tinh thần
                <i className="bi bi-caret-down-fill ps-2"></i>
              </span>
            </button>
          </div>

          <div className="collapse" id="collapsevcb">
            <b style={{ textAlign: "center" }}>Gói ủng hộ tinh thần</b> <br />
            <div className={styles.text + " card card-body"}>
              Đây là gói ủng hộ của những người thuần tuý muốn ủng hộ dự án và
              không yêu cầu hoàn lại tiền nếu việc gọi vống từ cộng đồng thất
              bại.
            </div>
          </div>
          <p>Số người đã ủng hộ tinh thần: 500</p>
          <div className="row">
            <div className={"col-6"}>
              <img src={"img.png"} style={{ width: "100%" }} />
            </div>
            <div className={"col-6"}>
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

        <div className={styles.box}>
          <button
            className={styles.donateButton}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsetcb"
            aria-expanded="false"
          >
            <span>
              $5 Gói ủng hộ tinh thần
              <i className="bi bi-caret-down-fill ps-2"></i>
            </span>
          </button>

          <div className="collapse" id="collapsetcb">
            <b style={{ textAlign: "center" }}>Gói ủng hộ tinh thần</b> <br />
            <div className={styles.text + " card card-body"}>
              Đây là gói ủng hộ của những người thuần tuý muốn ủng hộ dự án và
              không yêu cầu hoàn lại tiền nếu việc gọi vống từ cộng đồng thất
              bại.
            </div>
          </div>
          <p>Số người đã ủng hộ tinh thần: 500</p>
          <div className="row">
            <div className={"col-6"}>
              <img src={"img_1.png"} style={{ width: "100%" }} />
            </div>
            <div className={"col-6"}>
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

        <div className={styles.box}>
          <button
            className={styles.donateButton}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsebidv"
            aria-expanded="false"
          >
            <span>
              $5 Gói ủng hộ tinh thần
              <i className="bi bi-caret-down-fill ps-2"></i>
            </span>
          </button>

          <div className="collapse" id="collapsebidv">
            <b style={{ textAlign: "center" }}>Gói ủng hộ tinh thần</b> <br />
            <div className={styles.text + " card card-body"}>
              Đây là gói ủng hộ của những người thuần tuý muốn ủng hộ dự án và
              không yêu cầu hoàn lại tiền nếu việc gọi vống từ cộng đồng thất
              bại.
            </div>
          </div>
          <p>Số người đã ủng hộ tinh thần: 500</p>
          <div className="row">
            <div className={"col-6"}>
              <img src={"img_2.png"} style={{ width: "100%" }} />
            </div>
            <div className={"col-6"}>
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

        <div className={styles.box}>
          <button
            className={styles.donateButton}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsemb"
            aria-expanded="false"
          >
            <span>
              $5 Gói ủng hộ tinh thần
              <i className="bi bi-caret-down-fill ps-2"></i>
            </span>
          </button>

          <div className="collapse" id="collapsemb">
            <b style={{ textAlign: "center" }}>Gói ủng hộ tinh thần</b> <br />
            <div className={styles.text + " card card-body"}>
              Đây là gói ủng hộ của những người thuần tuý muốn ủng hộ dự án và
              không yêu cầu hoàn lại tiền nếu việc gọi vống từ cộng đồng thất
              bại.
            </div>
          </div>
          <p>Số người đã ủng hộ tinh thần: 500</p>
          <div className="row">
            <div className={"col-6"}>
              <img src={"img_3.png"} style={{ width: "100%" }} />
            </div>
            <div className={"col-6"}>
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

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Ủng hộ
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Không
                </button>
                <button type="button" class="btn btn-primary">
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
