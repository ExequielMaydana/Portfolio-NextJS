import React from "react";
import styles from "../../styles/AboutMe.module.css";
import Image from "next/image";
import imgAbout from "../../../public/imgs/imgAbout.svg";
import { imagesSkills } from "./imagesSkills";
const AboutMe = () => {
  return (
    <section className={styles.aboutMe} id="aboutMe">
      <div className={styles.AboutMe__ctrTitle}>
        <h2 className={styles.aboutMe__title}>SOBRE MÍ</h2>
        <div className={styles.aboutMe__barra}></div>
      </div>
      <div className={styles.aboutMe__ctrImgAndParagraph}>
        <figure className={styles.aboutMe__ctrImg}>
          <Image
            src={imgAbout}
            alt="imagen about me"
            className={styles.aboutMe__img}
          />
        </figure>

        <article className={styles.aboutMe__ctrParagraph}>
          <p className={styles.aboutMe__paragraph}>
            Me complace presentarle mi perfil como Desarrollador Web Full Stack.
            Con un año de experiencia en el campo, he desarrollado una sólida
            base de conocimientos y habilidades técnicas que me permiten diseñar
            y construir aplicaciones web completas y eficientes.
            <br />
            <br />
            Durante mi trayectoria profesional, he trabajado en diversos
            proyectos en los que he tenido la oportunidad de desempeñar un papel
            integral en todas las fases del ciclo de vida del desarrollo de
            software. He colaborado estrechamente con equipos
            multidisciplinarios, incluyendo diseñadores, desarrolladores
            frontend y backend, para crear soluciones web de alta calidad y
            rendimiento.
            <br />
            <br />
            Siempre intentando ser mejor que ayer.
            <br />
            <br />
            Estas son algunas tecnologías con las que he estado trabajando
            recientemente.
          </p>
          <ul className={styles.aboutMe__ctrSkills}>
            {imagesSkills.map((item) => (
              <li key={item.id}>
                <figure className={styles.containerImg}>
                  <Image
                    width={500}
                    height={500}
                    src={item.imageUrl}
                    alt="image skill"
                    className={styles.imgSkill}
                  />
                </figure>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
