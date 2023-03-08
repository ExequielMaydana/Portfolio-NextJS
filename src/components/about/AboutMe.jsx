import Image from "next/image";
import React from "react";
import style from "../../styles/AboutMe.module.css";
import myPhoto from "../../../public/imgs/photoMe.png";

const AboutMe = () => {
  return (
    <section className={style.sectionAboutMe} id="aboutMe">
      <article className={style.aboutPhoto}>
        <Image src={myPhoto} alt="Mi foto" className={style.photo} />
      </article>

      <article className={style.aboutTextContainer}>
        <span className={style.emojiTextAbout}>🧐 Sobre mi</span>
        <h2 className={style.titleAbout}>
          Hernan <br />
          Exequiel
        </h2>

        {/* Este se muestra en Desktop */}
        <p className={style.aboutParagrhapDesktop}>
          👋 Mi nombre es Hernan Exequiel Maydana, pero puedes llamarme
          simplemente Exequiel. ¡Encantado de conocerte!
          <br />
          <br />
          👨‍💻 Hace más de un año desarrollando y programando interfaces con
          JavaScript, React y ahora también con Next.js, también tengo
          conocimiento en backend con Node.js y Express, hasta ahora he
          implementado en mis REST APIs las bases de Datos, MongoDB y
          PostgreSQL.
          <br />
          👨‍🎓 Actualmente estoy cursando una Tecnicatura en Desarrollo Web, en la
          Facultad de Ciencias de la Administración UNER.
          <br />
          💡 Intereses en Desarrollo FrontEnd con ReactJS, Next.js, Desarrollo
          Backend con Node.js.
          <br />
          <br />
          🚀 Tratando de ser un poco mejor que ayer todos los días.
        </p>
        <p className={style.aboutParagrhap}>
          Pero puedes llamarme Exequiel. Un placer. Hace más de un año
          desarrollando y programando interfaces con JavaScript, React y ahora
          también con Next.js, también tengo conocimiento en backend con Node.js
          y Express, hasta ahora he implementado en mis REST APIs las bases de
          Datos, MongoDB y PostgreSQL. Actualmente estoy cursando una
          tecnicatura en Desarrollo Web, en la facultad de Ciencias de la
          Administración UNER. Intereses en Desarrollo FrontEnd con ReactJS,
          Next.js, Desarrollo Backend con Node.js.
          <br />
          <br />
          🚀 Tratando de ser un poco mejor que ayer todos los días.
        </p>
      </article>
    </section>
  );
};

export default AboutMe;
