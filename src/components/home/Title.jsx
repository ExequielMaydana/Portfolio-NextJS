import React from "react";
import styles from "../../styles/House.module.css";
import Link from "next/link";

const Title = () => {
  return (
    <article className={styles.home__ctrText}>
      <h1 className={styles.home__title}>
        Soy{" "}
        <b>
          <b className={styles.title__bE}>E</b>xe
        </b>
        , un <br />
        Profesional
        <br className={styles.title__hrIsNone}/>
        <div className={styles.title__rotateWords}>
          <span>Frontend.</span>
          <span>Backend.</span>
          <span>Web Developer.</span>
        </div>
      </h1>
      <div className={styles.home__ctrBtnAndText}>
        <p className={styles.home__paragraph}>
          Desarrollador de Software con casi +1 año de experiencia en Desarrollo
          Web con el stack de tecnologias como React/Nex.js para Frontend y
          Node.js para Backend.
        </p>
        <Link
          href="/cv.pdf"
          download="cv-hernan-exequiel-maydana"
          target="_blank"
        >
          <button className={styles.home__btn}>
            <span>Descargar cv</span>
            <i className="bx bx-download"></i>
          </button>
        </Link>
      </div>
    </article>
  );
};

export default Title;
