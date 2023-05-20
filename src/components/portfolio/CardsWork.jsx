import React from "react";
import styles from "../../styles/Portfolio.module.css";
import Image from "next/image";
import eCommerce from "../../../public/img-projects/e-commerce.png";
import coverOng from "../../../public/img-projects/ong.png";
import coverGym from "../../../public/img-projects/landin-pablocoach.png";
import Link from "next/link";

const CardsWork = () => {
  return (
    <div className={styles.portfolio__ctrCards}>
      {/* card ONE */}
      <article className={styles.card}>
        <figure className={styles.card__ctrImg}>
          <Image
            src={eCommerce}
            alt="imagen proyecto"
            className={styles.card__img}
          />
          <div className={styles.card__blurImg}></div>
          <Link href="https://e-commerce-exedev.netlify.app/" target="_blank">
            <button className={styles.card__btnImg}>
              <b>Dóblame!</b>
            </button>
          </Link>
        </figure>
        <div className={styles.card__content}>
          <div className={styles.card__text}>
            <h3 className={styles.card__title}>Tienda online</h3>
            <p className={styles.card__paragraph}>
              Tienda online de productos electrónicos, consumí una API con React
              y desarrolle el frontend desde cero, la aplicación cuenta con
              login, signup, logout, validaciones del lado del front, rutas
              protegidas...
            </p>
            <div className={styles.card__skillsUsage}>
              <span>react.js</span>
              <b>-</b>
              <span>reduxjs/toolkit</span>
              <b>-</b>
              <span>axios</span>
              <b>-</b>
              <span>styled-components</span>
              <b>-</b>
              <span>react-router</span>
              <b>-</b>
              <span>react-hook-form</span>
            </div>
          </div>
          <div className={styles.card__icons}>
            <Link
              href="https://github.com/ExequielMaydana/e-commerce-react-v2"
              target="_blank"
            >
              <span className={styles.card__icon} data-tooltip="Repositorio">
                <i className="bx bxl-github"></i>
              </span>
            </Link>
            <Link href="https://e-commerce-exedev.netlify.app/" target="_blank">
              <span className={styles.card__icon} data-tooltip="Web">
                <i className="bx bx-link-external"></i>
              </span>
            </Link>
          </div>
        </div>
      </article>

      {/* card Two */}
      <article className={styles.card}>
        <figure className={styles.card__ctrImg}>
          <Image
            src={coverOng}
            alt="imagen proyecto"
            className={styles.card__img}
          />
          <div className={styles.card__blurImg}></div>
          <Link href="https://www.angelescallejeros.org.ar/" target="_blank">
            <button className={styles.card__btnImg}>
              <b>Dóblame!</b>
            </button>
          </Link>
        </figure>
        <div className={styles.card__content}>
          <div className={styles.card__text}>
            <h3 className={styles.card__title}>Ángeles Callejeros</h3>
            <p className={styles.card__paragraph}>
              ¡ONG de niños! Desarrolle el frontend de esta web siguiendo él
              prototipo de Figma que me proporcionaron, implemente el backend de
              Mercado Pago para recibir cualquier tipo de donaciones.
            </p>
            <div className={styles.card__skillsUsage}>
              <span>next.js</span>
              <b>-</b>
              <span>axios</span>
              <b>-</b>
              <span>node.js</span>
            </div>
          </div>
          <div className={styles.card__icons}>
            <Link href="https://github.com/ExequielMaydana" target="_blank">
              <span className={styles.card__icon} data-tooltip="Repositorio">
                <i className="bx bxl-github"></i>
              </span>
            </Link>
            <Link href="https://www.angelescallejeros.org.ar/" target="_blank">
              <span className={styles.card__icon} data-tooltip="Web">
                <i className="bx bx-link-external"></i>
              </span>
            </Link>
          </div>
        </div>
      </article>

      {/* card Three */}
      <article className={styles.card}>
        <figure className={styles.card__ctrImg}>
          <Image
            src={coverGym}
            alt="imagen proyecto"
            className={styles.card__img}
          />
          <div className={styles.card__blurImg}></div>
          <Link href="https://pablosalinacoach.online" target="_blank">
            <button className={styles.card__btnImg}>
              <b>Dóblame!</b>
            </button>
          </Link>
        </figure>
        <div className={styles.card__content}>
          <div className={styles.card__text}>
            <h3 className={styles.card__title}>Asesoramiento Online</h3>
            <p className={styles.card__paragraph}>
              Web creada para un compañero! Implemente el backend de Mercado
              Pago para poder recibir pagos online, una vez el pago haya sido
              aceptado, se habilitará un botón de WhatsApp, para que el usuario
              pueda hablar con mi cliente.
            </p>
            <div className={styles.card__skillsUsage}>
              <span>next.js</span>
              <b>-</b>
              <span>axios</span>
              <b>-</b>
              <span>node.js</span>
            </div>
          </div>
          <div className={styles.card__icons}>
            <Link href="https://github.com/ExequielMaydana" target="_blank">
              <span className={styles.card__icon} data-tooltip="Repositorio">
                <i className="bx bxl-github"></i>
              </span>
            </Link>
            <Link href="https://pablosalinacoach.online" target="_blank">
              <span className={styles.card__icon} data-tooltip="Web">
                <i className="bx bx-link-external"></i>
              </span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CardsWork;
