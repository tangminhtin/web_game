import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Lore from "../components/Lore";
import SplashArt from "../components/SplashArt";
import Picture from "../components/Picture";
import Sponsor from "../components/Sponsor";
import Slogan from "../components/Slogan";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  // Canvas();
  return (
    <div className={styles.container}>
      <Head>
        <title>Lillusion Theory</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <SplashArt />
        <div className={"row"}>
          <Slogan />
        </div>
        <div className={"row"}>
          <div className={"col-md-7 col-lg-7 col-xl-9"}>
            <div id="about">
              <section>
                <About />
              </section>
            </div>
            <div id="lore">
              <section>
                <Lore />
              </section>
            </div>
          </div>
          <div className={"col-md-5 col-lg-5 col-xl-3"}>
            <div id="donate">
              <section>
                <Sponsor />
              </section>
            </div>
          </div>
        </div>
        <div id="picture">
          <section>
            <Picture />
          </section>
        </div>
        <footer className={""}>
          <div id="contact">
            <section>
              <Contact />
            </section>
          </div>
        </footer>
      </main>
    </div>
  );
}