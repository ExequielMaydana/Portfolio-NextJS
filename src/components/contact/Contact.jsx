import React from "react";
import styles from "../../styles/Contact.module.css";
import Link from "next/link";
import Image from "next/image";
import imgContact from "../../../public/imgSections/contact.svg";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contact__header}>
        <h2 className={styles.contact__title}>Contacto</h2>
        <div className={styles.contact__barra}></div>
      </div>

      <article className={styles.contact__textAndForm}>
        <div className={styles.contact__paragraph}>
          <p className={styles.paragrapTitle}>
            ¿Estás buscando un desarrollador web?, no busques más.
          </p>
          <p className={styles.paragraph}>
            ¿Le ha interesado mi perfil? ¿Buscas un desarrollador con talento
            para dar vida a tu solución web? ¡Cuéntamelo!
          </p>
          <div className={styles.contact__ctrWsp}>
            <Link
              href="https://wa.link/is1b74"
              target="_blank"
              className={styles.pragraph__wsp}
            >
              +54 354 076854 <i class="bx bxl-whatsapp"></i>
            </Link>
          </div>
          <Image
            src={imgContact}
            alt="ilustration"
            className={styles.contact__img}
          />
        </div>
        <form className={styles.contact__form}>
          <ul className={styles.form__items}>
            <li className={styles.form__item}>
              <label
                className={styles.form__label}
                htmlFor="FirstNameAndLastName"
              >
                Nombre y Apellido
              </label>

              <input
                className={styles.form__input}
                type="text"
                id="FirstNameAndLastName"
                placeholder="ej: Martín Pérez"
              />
            </li>
            <li className={styles.form__item}>
              <label className={styles.form__label} htmlFor="email">
                Email
              </label>

              <input
                className={styles.form__input}
                type="email"
                id="email"
                placeholder="ej: correo@correo.com"
              />
            </li>
            <li className={styles.form__item}>
              <label className={styles.form__label} id="message">
                Deja tu mensaje aquí
              </label>

              <textarea
                className={styles.form__textArea}
                id="message"
                placeholder="Escribe algo"
              ></textarea>
            </li>
          </ul>
          <button className={styles.form__btn}>
            Enviar <i className="bx bx-send"></i>
          </button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
