import React from "react";
import styles from "../../styles/PageContact.module.css";
import { useRouter } from "next/router";
import Form from "./Form";
import Link from "next/link";
import Image from "next/image";

const PageContact = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <section className={styles.pageContact}>
      <header className={styles.pageContact__route}>
        <p onClick={goToHome} className={styles.route}>
          Inicio
        </p>{" "}
        - <p>Contacto</p>
      </header>
      <div className={styles.pageContact__ctrTextAndForm}>
        <article className={styles.pageContact__text}>
          <h2 className={styles.pageContact__title}>Contacto</h2>
          <p className={styles.pageContact__subtitle}>
            Si tienes algun proyecto en el que quieras que colabore o eres
            alguien que necesita de mis habilidades para satisfacer las
            necesidades de tus clientes, no dudes en enviarme un mensaje,
            intentaré responder todos los mensajes lo más pronto posible.
          </p>
          <figure className={styles.pageContact__imgctr}>
            <Image
              width={500}
              height={200}
              src="/imgSections/contact.svg"
              alt="contact"
              className={styles.pageContact__img}
            />
          </figure>
        </article>
        <Form />
      </div>

      <Link
        href="https://wa.link/is1b74"
        target="_blank"
        className={styles.pageContact__what}
      >
        {" "}
        <i className="bx bxl-whatsapp"></i>
      </Link>
    </section>
  );
};

export default PageContact;
