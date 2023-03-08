import Link from "next/link";
import React from "react";
import style from "../../styles/Contact.module.css";

const Contact = () => {
  return (
    <section className={style.sectionContact}>
      <div className={style.containerTitleContact}>
        <div className={style.emojiContact}>📩 Contacto</div>
        <h2 className={style.titleContact}>
          Creemos
          <br /> algo juntos
        </h2>
      </div>

      <div className={style.containerItemsContact}>
        <Link
          href="https://api.whatsapp.com/send/?phone=543454076854"
          target="_blank"
          className={style.itemsWhatsp}
        >
          <i className="fa-brands fa-whatsapp"></i>
          Vamos a conversar
        </Link>

        <div className={style.itemGmail}>
          <i className="fa-solid fa-paper-plane"></i>
          Email:
          <br /> exedevcoding22@gmail.com
        </div>
      </div>
    </section>
  );
};

export default Contact;
