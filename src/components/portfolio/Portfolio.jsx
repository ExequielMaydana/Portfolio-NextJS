import Image from "next/image";
import React from "react";
import style from "../../styles/Portfolio.module.css";
import Link from "next/link";
import imgONG from "../../../public/projectsImg/imgProjectONG1.jpg";
import imgECommer from "../../../public/projectsImg/e-commerce-portada.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio" className={style.sectionPortfolio}>
      <div className={style.titleTecnologi}>
      <div className={style.containerGreetingAndTitle}>
        <div className={style.greetingEmoji}>🔗 Portfolio</div>
        <h2 className={style.titlePortfolio}>
          Trabajos<br/> y Proyectos
        </h2>
      </div>
      <div className={style.containerLink}>
        <article className={style.linkWork}>
          <i className="fa-solid fa-fill-drip"></i>
          Frontend
        </article>
        <article className={style.linkWork}>
          <i className="fa-solid fa-server"></i>
          Backend
        </article>
        <article className={style.linkWork}>
          <i className="fa-solid fa-capsules"></i>
          Full-Stack
        </article>
      </div>


      </div>
      

     

      <div className={style.containerCardProject}>
        <article className={style.cardProject}>
          <div className={style.cardProjectContent}>
            <div className={style.cardContentTextAndTechnologi}>
              <h3 className={style.cardTitle}>ONG Angeles Callejeros</h3>
              <p className={style.cardParagraph}>
                Web creada desde cero en Zaro estudio creativo, con la
                integracion de la API de Mercado Pago y la API de Instagram.
              </p>
              <ul className={style.contentContainerTechnologi}>
                <li className={style.technologi}>Next.js</li>
                <li className={style.technologi}>Sass</li>
              </ul>
            </div>

            <div className={style.containerImgProject}>
              <Image
                src={imgONG}
                alt="img proyecto ONG"
                className={style.imgProject}
              />
            </div>
            <div className={style.containerLinksProject}>
              <Link href="https://github.com/ExequielMaydana" target="_blank">
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link
                href="https://www.angelescallejeros.org.ar/"
                target="_blank"
              >
                <i className="fa-solid fa-globe"></i>
              </Link>
            </div>
          </div>
        </article>

        <article className={style.cardProject}>
          <div className={style.cardProjectContent}>
            <div className={style.cardContentTextAndTechnologi}>
              <h3 className={style.cardTitle}>E-commerce</h3>
              <p className={style.cardParagraph}>
                {" "}
                Proyecto personal creado desde cero consumiendo el Backend de un
                E-commerce
              </p>
              <ul className={style.contentContainerTechnologi}>
                <li className={style.technologi}>React.js</li>
              </ul>
            </div>

            <div className={style.containerImgProject}>
              <Image
                src={imgECommer}
                alt="img e-commerce"
                className={style.imgProject}
              />
            </div>

            <div className={style.containerLinksProject}>
              <Link
                href="https://github.com/ExequielMaydana/e-commerce-react-v2"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link
                href="https://e-commerce-exedev.netlify.app/"
                target="_blank"
              >
                <i className="fa-solid fa-globe"></i>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
