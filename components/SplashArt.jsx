import React from "react";
import styles from "../styles/SplashArt.module.css";
import Image from "next/image";
const SplashArt = () => {
  return (
    <div className={styles.banner}>
      <Image
        // loader={myLoader}
        src="/banner_2.png"
        alt="Picture of the author"
        width={500}
        height={300}
        layout="responsive"
      />
    </div>
  );
};

export default SplashArt;
