import Link from "next/link";
import React from "react";
import style from "../../styles/Carrera.module.css";

const Carrera = () => {
  return (
    <section id="career" className={style.sectionCarrera}>

      <div className={style.containerTitleCarrera}>
        <div className={style.emojiCarrera}>💼 Carrera</div>
        <h2 className={style.titleCarrera}>
          Trayectoria
          <br /> hasta ahora
        </h2>
      </div>

      <div className={style.containerSliders}>

        <article className={style.articleProfessional}>

          <div className={style.titleAreaContainer}>
            <h3 className={style.titleArea}>Área Profesional</h3>
            <p className={style.paragraphArea}>2021 - Actualmente</p>
          </div>

          <div className={style.containerCardsArea}>

            <div className={style.cardArea}>
              <div className={style.containerTitleParagraphCard}>
                <h4 className={style.titleCard}>Zaro Estudio Creativo</h4>
                <p className={style.paragraphCard}>
                  En Zaro me estoy desempeñando como Desarrollador Frontend,
                  desarrolle algunos proyectos con React.js y Next.js
                </p>
              </div>
              <div className={style.containerDateCardAndCertificate}>
                <div className={style.containerDate}>
                  <p>Noviembre/2021 - Actualmente</p>
                </div>
              </div>
            </div>

          </div>
        </article>

        <article className={style.articleProfessional}>

          <div className={style.titleAreaContainer}>
            <h3 className={style.titleArea}>Área Académica</h3>
            <p className={style.paragraphArea}>2021 - Actualmente</p>
          </div>

          <div className={style.containerCardsArea}>
            
            <div className={style.cardArea}>
              <div className={style.containerTitleParagraphCard}>
                <h4 className={style.titleCard}>
                  <b>Argentina Programa</b>
                  <br />
                  Programacion Web Java y SQL
                </h4>
                <p className={style.paragraphCard}>
                  En este curso di mis primeros pasos en la programacion, fue
                  fundamental para ser el desarrollador que soy hoy en dia.
                </p>
              </div>

              <div className={style.containerDateCardAndCertificate}>
                <div className={style.containerDate}>
                  <p>
                    <b>6 meses</b>
                  </p>
                  <p>Junio/2021 - diciembre/2021</p>
                </div>
                <Link
                  href="https://drive.google.com/file/d/1XPKT5FBtdsN8rcsmNWoitjG4v_URkHvD/view"
                  target="_blank"
                  className={style.linkCertificate}
                >
                  Cerficiado <i className="fa-regular fa-paper-plane"></i>
                </Link>
              </div>
            </div>

            <div className={style.cardArea}>
              <div className={style.containerTitleParagraphCard}>
                <h4 className={style.titleCard}>
                  <b>Academlo</b>
                  <br />
                  Desarrollo Web Full-Stack
                </h4>
                <p className={style.paragraphCard}>
                  Un curso completo e intensivo de 7 meses donde aprendi
                  desarrollo web y ciencias de la computación a través de clases
                  interactivas, ejercicios y proyectos reales.
                </p>
              </div>
              <div className={style.containerDateCardAndCertificate}>
                <div className={style.containerDate}>
                  <p>
                    <b>7 meses</b>
                  </p>
                  <p>mayo/2022 - noviembre/2022</p>
                </div>
                <Link
                  href="https://drive.google.com/file/d/1GF5aDCaqwcAc5n8TCmOXlsfx3XOxoOtS/view?usp=sharing"
                  target="_blank"
                  className={style.linkCertificate}
                >
                  Cerficiado <i className="fa-regular fa-paper-plane"></i>
                </Link>
              </div>
            </div>

            <div className={style.cardArea}>
              <div className={style.containerTitleParagraphCard}>
                <h4 className={style.titleCard}>
                  <b>Facultad de Ciencias de la Administracion</b>
                  <br />
                  Tecnicatura universitaria en Desarrollo Web
                </h4>
                <p className={style.paragraphCard}>
                  una sólida formación teórica y practica en
                  programación, ingeniería de software, redes y tecnologías
                  aplicadas al diseño y desarrollo de aplicaciones y servicios
                  web, así como también computación móvil y ubicua.
                </p>
              </div>
              <div className={style.containerDateCardAndCertificate}>
                <div className={style.containerDate}>
                  <p>febrero/2022 - Actualmente</p>
                </div>
              </div>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
};

export default Carrera;
