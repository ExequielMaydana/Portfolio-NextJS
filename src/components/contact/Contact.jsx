import React from "react";
import styles from "../../styles/Contact.module.css";
import Link from "next/link";
import Image from "next/image";
import imgContact from "../../../public/imgSections/contact.svg";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contact__header}>
        <h2 className={styles.contact__title}>Contacto</h2>
        <div className={styles.contact__barra}></div>
      </div>

      <article className={styles.contact__textAndForm}>
        <div className={styles.contact__paragraph}>
          <p className={styles.paragrapTitle}>¡Creemos algo juntos!</p>
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
        <Form />
      </article>
    </section>
  );
};

export default Contact;
