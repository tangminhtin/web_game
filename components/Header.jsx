import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Lillusion Theory
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse custom-item" id="navbarText">
          <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Giới thiệu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#lore">
                Cốt truyện
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#picture">
                Hình ảnh
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#donate">
                Donate
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
