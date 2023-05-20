import React from "react";
import styles from "../../styles/PageSobreMi.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const PageContent = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <section className={styles.container}>
      <div className={styles.container__route}>
        <p onClick={goToHome} className={styles.route}>
          Inicio
        </p>{" "}
        - <p>Sobre mí</p>
      </div>
      <article className={styles.container__aboutAndAcademic}>
        <div className={styles.container__about}>
          <h2 className={styles.container__title}>¿Quien soy?</h2>
          <div></div>
          <p className={styles.container__paragraph}>
            Soy un Desarrollador Web Full-Stack ubicado en Entre Ríos, una
            Provincia Argentina ubicada en el noreste de Argentina.
            <br />
            <br />
            A lo largo de mi formación como Desarrollador he enfatizado la
            importancia del código escalable, gran atención al detalle,
            proactivo y con capacidad para desarrollar páginas web elegantes y
            pioneras para clientes exigentes.
            <br />
            <br />
            Interesado en trabajar en proyectos ambiciosos y con gente positiva.
            <br />
            <br />
            <Link href="/contact" className={styles.container__link}>
              Hagamos algo especial
            </Link>
          </p>
        </div>

        <div className={styles.container__academic}>
          <h3 className={styles.container__title}>Formación Académica</h3>
          <p className={styles.container__paragraph}>
            Programacion Web con Java y SQL
            <br />
            <Link
              href="https://www.argentina.gob.ar/economia/conocimiento/argentina-programa"
              target="_blank"
              className={styles.container__link}
            >
              Argentina Programa
            </Link>
            <br />
            <Link
              href="/certificate-AP.pdf"
              download="certificado-argentina-programa"
              target="_blank"
              className={styles.container__link}
            >
              certificado
            </Link>
          </p>

          <p className={styles.container__paragraph}>
            Desarrollador Web Full-Stack
            <br />
            <Link
              href="https://www.academlo.com/"
              className={styles.container__link}
            >
              Academlo
            </Link>
            <br />
            <Link
              href="/certificate-A.pdf"
              download="certificado-academlo"
              target="_blank"
              className={styles.container__link}
            >
              certificado
            </Link>
          </p>
        </div>
      </article>

      <article className={styles.benefits}>
        <div className={styles.benefits__intro}>
          <span className={styles.benefits__title}>BENEFICIOS</span>
          <div className={styles.benefits__divider}></div>
          <h3 className={styles.container__title}>
            ¿Por qué debería contratarme?
          </h3>
          <p className={styles.container__paragraph}>
            Cuando construyo o clono proyectos web, me adhiero firmemente a
            estos principios que hacen que mis sitios web sean únicos y
            escalables.
          </p>
        </div>

        <div className={styles.benefits__cards}>
          <article className={styles.benefits__card}>
            <div className={styles.card__header}>
              <div className={styles.benefits__ctrIconSearch}>
                <i className="bx bx-search"></i>
              </div>
              <h4 className={styles.card__title}>
                SEO(Search Engine Optimization)
              </h4>
            </div>
            <p className={styles.card__paragraph}>
              Empleo las mejores prácticas de SEO como {`"Semantic HTML"`} y más
              en los sitios web y proyectos en los que trabajo para mejorar la
              visibilidad del sitio y el ranking en Google.
            </p>
          </article>

          <article className={styles.benefits__card}>
            <div className={styles.card__header}>
              <div className={styles.benefits__ctrIconMob}>
                <i className="bx bx-mobile-alt"></i>{" "}
              </div>
              <h4 className={styles.card__title}>Responsive Design</h4>
            </div>
            <p className={styles.card__paragraph}>
              Siempre que comienzo a crear un sitio web desde cero, sigo el
              enfoque {`"mobile-first"`}, donde inicialmente se crea una página
              web para tablets y smartphones, para adaptarla luego a las
              necesidades de un navegador de escritorio.
            </p>
          </article>

          <article className={styles.benefits__card}>
            <div className={styles.card__header}>
              <div className={styles.benefits__ctrIconCde}>
                <i className="bx bx-code-alt"></i>
              </div>
              <h4 className={styles.card__title}>Reusable & Minimal code</h4>
            </div>
            <p className={styles.card__paragraph}>
              Intento escribir el mínimo código posible utilizando herramientas
              como Variables CSS y escribiendo clases de utilidad
              personalizadas.
            </p>
          </article>
        </div>
      </article>
    </section>
  );
};

export default PageContent;
