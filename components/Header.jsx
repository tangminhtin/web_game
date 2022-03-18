import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">LOGO</Link>
      </div>
      <ul className={styles.menu}>
        <li>
          <a href="#about">Giới thiệu</a>
        </li>
        <li>
          <a href="#lore">Cốt truyện</a>
        </li>
        <li>
          <a href="#picture">Hình ảnh</a>
        </li>
        <li>
          <a href="#donate">Donate</a>
        </li>
        <li>
          <a href="#contact">Liên hệ</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
