import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/Contact.module.css";

const Form = () => {
  const { handleSubmit, register } = useForm();
  const submit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.contact__form}>
      <ul className={styles.form__items}>
        <li className={styles.form__item}>
          <label className={styles.form__label} htmlFor="FirstNameAndLastName">
            Nombre y Apellido
          </label>

          <input
            className={styles.form__input}
            type="text"
            id="FirstNameAndLastName"
            placeholder="ej: Martín Pérez"
            {...register("nombreyapellido")}
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
            {...register("email")}
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
            {...register("message")}
          ></textarea>
        </li>
      </ul>
      <button className={styles.form__btn}>
        Enviar <i className="bx bx-send"></i>
      </button>
    </form>
  );
};

export default Form;
