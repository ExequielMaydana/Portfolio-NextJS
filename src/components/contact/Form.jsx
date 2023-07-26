import React from "react";
import styles from "../../styles/Contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import axios from "axios";

const Form = () => {
  return (
    <Formik
      initialValues={{
        nombreyapellido: "",
        email: "",
        message: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.nombreyapellido) {
          errors.nombreyapellido = "Requerido";
        }
        if (!values.email) {
          errors.email = "Requerido";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Correo electrónico no válido";
        }
        if (!values.message) {
          errors.message = "Requerido";
        }

        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        // fetch(`/api/send_gmail`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(values),
        // })

        axios
          .post("/api/send_gmail", values)
          .then((data) => {
            console.log(data);
            toast.success("El correo ha sido enviado correctamente!");
            resetForm();
          })
          .catch((error) => {
            console.log(error);
            toast.error("Ha ocurrido un error al enviar el correo.");
          });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className={styles.contact__form}>
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
                name="nombreyapellido"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nombreyapellido}
              />

              {errors.nombreyapellido && touched.nombreyapellido && (
                <p className={styles.errorField}>{errors.nombreyapellido}</p>
              )}
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
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <p className={styles.errorField}>{errors.email}</p>
              )}
            </li>
            <li className={styles.form__item}>
              <label className={styles.form__label} id="message">
                Deja tu mensaje aquí
              </label>

              <textarea
                className={styles.form__textArea}
                id="message"
                placeholder="Escribe algo"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              ></textarea>
              {errors.message && touched.message && (
                <p className={styles.errorField}>{errors.message}</p>
              )}
            </li>
          </ul>
          <button className={styles.form__btn} type="submit">
            Enviar <i className="bx bx-send"></i>
          </button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </form>
      )}
    </Formik>
  );
};

export default Form;
