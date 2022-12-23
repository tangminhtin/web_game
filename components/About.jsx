import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className="d-flex justify-content-center">
        <h1 className={styles.title}>Giới thiệu</h1>
      </div>
      <section className="mt-5">
        <h4>Tổng quan</h4>
        <p>
          Lillusion Theory hay Lillusion là một tựa game 2D indie được phát triển bởi đội ngũ The Night Owls
          tới từ Việt Nam.
        </p>
        <p>
          Gameplay của Lillusion được lấy cảm hứng từ tựa game nổi tiếng Hollow Knight với lối chơi
                    khám phá bản đồ, đánh quái tích lũy kinh nghiệm, vượt qua các bosses và tận hưởng cốt truyện.
                    Cơ chế chiến đấu của Lillusion có hơi hướng của các dòng game Soul-likes xoay quanh chém và né.
        </p>
        <p> Lillusion phát hành trên Steam, hỗ trợ các dòng máy Window, Linux và MacOS, điều khiển bằng bàn phím. </p>
      </section>
    </div>
  );
};

export default About;
