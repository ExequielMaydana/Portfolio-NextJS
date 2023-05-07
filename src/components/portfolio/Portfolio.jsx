import React from "react";
import styles from "../../styles/Portfolio.module.css";
import CardsWork from "./CardsWork";

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.portfolio__ctrTitle}>
        <h2 className={styles.portfolio__title}>Algunos <br/> Trabajos</h2>
        <div className={styles.portfolio__barra}></div>
      </div>
      <CardsWork/>
    </section>
  );
};

export default Portfolio;
