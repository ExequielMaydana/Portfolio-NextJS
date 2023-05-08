import React from "react";
import styles from "../../styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.aboutMe} id="aboutMe">
      <div className={styles.AboutMe__ctrTitle}>
        <h2 className={styles.aboutMe__title}>SOBRE MÍ</h2>
        <div className={styles.aboutMe__barra}></div>
      </div>

      <article className={styles.aboutMe__ctrParagraph}>
        <p className={styles.aboutMe__paragraph}>
          ¡Hola! Me llamo Exequiel, disfruto creando cosas que viven en
          internet. Mi interés por el Desarrollo Web comenzó en el año 2021.
          Desde entonces he estado estudiando de forma autodidacta, cursos,
          bootcamps y sobre todo poniendo en práctica lo que he ido aprendiendo.
          <br />
          <br />
          Actualmente, estoy trabajando de manera Freelance como desarrollador
          Frontend, en algunas ocasiones he tenido que implementar algo de
          Backend, igualmente les quiero decir que estoy abierto a nuevas
          oportunidades.
          <br />
          <br />
          Siempre intentando ser mejor que ayer.
          <br />
          <br />
          Estas son algunas tecnologías con las que he estado trabajando
          recientemente.
        </p>
      </article>

      <article className={styles.aboutMe__ctrSkills}>
        <div>
          <p className={styles.aboutMe__skill}>
            <i className="bx bx-right-arrow"></i>HTML5
          </p>
          <p className={styles.aboutMe__skill}>
            <i className="bx bx-right-arrow"></i>CSS3
          </p>
          <p className={styles.aboutMe__skill}>
            <i className="bx bx-right-arrow"></i>JavaScript (ES6+)
          </p>
        </div>
        <div>
          <p className={styles.aboutMe__skill}>
            <i className="bx bx-right-arrow"></i>React.js
          </p>
          <p className={styles.aboutMe__skill}>
            <i className="bx bx-right-arrow"></i>Next.js
          </p>
          <p className={styles.aboutMe__skill}>
            <i className="bx bx-right-arrow"></i>Angular.js
          </p>
        </div>
        <div>
          <p className={styles.aboutMe__skill}>
            <i className="bx bx-right-arrow"></i>Node.js
          </p>
          <p className={styles.aboutMe__skill}>
            <i className="bx bx-right-arrow"></i>MongoDB
          </p>
          <p className={styles.aboutMe__skill}>
            <i className="bx bx-right-arrow"></i>PostgreSQL
          </p>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
