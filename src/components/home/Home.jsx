import React from "react";
import styles from "../../styles/House.module.css";
import Title from "./Title";

const Home = () => {
  return (
    <>
      <section className={styles.home}>
        <Title />

        <div className={styles.home__ctrIndication}>
          <article className={styles.home__indicationOne}>
            <span> Siga hacia abajo</span>
            <i className="bx bx-chevrons-down"></i>
          </article>
          <article className={styles.home__indicationTwo}>
            <span> Siga hacia abajo</span>
            <i className="bx bx-chevrons-down"></i>
          </article>
        </div>
      </section>
      <article>
        <div className="squares1"></div>
        <div className="squares2"></div>
        <div className="squares3"></div>
        <div className="squares4"></div>
      </article>
    </>
  );
};

export default Home;
