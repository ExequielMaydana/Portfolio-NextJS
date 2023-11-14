import React from "react";
import styles from "../../styles/Portfolio.module.css";
import Image from "next/image";
import coverOng from "../../../public/img-projects/ong.png";
import coverGym from "../../../public/img-projects/landin-pablocoach.png";
import HE from "../../../public/img-projects/HE.png";
import Link from "next/link";

const CardsWork = () => {
  return (
    <div className={styles.portfolio__ctrCards}>
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
      <article className={styles.card}>
        <figure className={styles.card__ctrImg}>
          <Image src={HE} alt="imagen proyecto" className={styles.card__img} />
          <div className={styles.card__blurImg}></div>
          <Link href="https://www.elheraldo.com.ar/" target="_blank">
            <button className={styles.card__btnImg}>
              <b>Dóblame!</b>
            </button>
          </Link>
        </figure>
        <div className={styles.card__content}>
          <div className={styles.card__text}>
            <h3 className={styles.card__title}>Diario El Heraldo</h3>
            <p className={styles.card__paragraph}>
              diario digital creado desde cero para Zaro Estudio Creativo, Mi
              rol principal fue implementar la interfaz de usuario utilizando
              Next.js y consumir los endpoints proporcionados por los backend
              para mostrar el contenido dinámico del diario. Utilicé la potencia
              de Tailwind CSS para diseñar los estilos, logrando una apariencia
              moderna y atractiva. Este proyecto representa mi habilidad para
              trabajar en equipo, adaptarme a los requisitos del cliente y
              entregar resultados de alta calidad.
            </p>
            <div className={styles.card__skillsUsage}>
              <span>next.js</span>
              <b>-</b>
              <span>axios</span>
              <b>-</b>
              <span>TailwindCSS</span>
            </div>
          </div>
          <div className={styles.card__icons}>
            <Link href="https://github.com/ExequielMaydana" target="_blank">
              <span className={styles.card__icon} data-tooltip="Repositorio">
                <i className="bx bxl-github"></i>
              </span>
            </Link>
            <Link href="https://www.elheraldo.com.ar/" target="_blank">
              <span className={styles.card__icon} data-tooltip="Web">
                <i className="bx bx-link-external"></i>
              </span>
            </Link>
          </div>
        </div>
      </article>

      <article className={styles.card}>
        <figure className={styles.card__ctrImg}>
          <Image
            width={1000}
            height={1000}
            src="/img-projects/myshop.png"
            alt="imagen proyecto"
            className={styles.card__img}
          />
          <div className={styles.card__blurImg}></div>
          <Link href="https://closetwithoutgender.vercel.app/" target="_blank">
            <button className={styles.card__btnImg}>
              <b>Dóblame!</b>
            </button>
          </Link>
        </figure>
        <div className={styles.card__content}>
          <div className={styles.card__text}>
            <h3 className={styles.card__title}>Tienda Online</h3>
            <p className={styles.card__paragraph}>
              Mi primer Proyecto Full-Stack, siempre desde que inicie en la
              programación quise abordar tanto el backend como el frontend,
              querer es poder, para el backend utilice NodeJS con ExpressJS y
              MongoDB para la base de datos, en el frontend utilice NextJS,
              TailwindCSS, Redux/Redux Toolkit, el proyecto consiste en una
              tienda onlinea en la cual se vende indumentaria, accesorios y
              zapatillas, también te podés crear una cuenta y también subir una
              foto de perfil, para esto utilice Cloudinary en el backend para
              alojar las imagenes y poder consumirlas desde el front, la subida
              de los productos se hacen desde un panel de administrador el cual
              fue construido con Material UI, el frontend de la página y el
              frontend del panel están en páginas distintas donde solo un
              usuario con el rol Admin puede acceder al panel para subir
              productos.
            </p>
            <div className={styles.card__skillsUsage}>
              <span>Node.js</span>
              <b>-</b>
              <span>Express.js</span>
              <b>-</b>
              <span>MongoDB</span>
              <b>-</b>
              <span>Next.js</span>
              <b>-</b>
              <span>Axios</span>
              <b>-</b>
              <span>TailwindCSS</span>
              <b>-</b>
              <span>Material UI</span>
            </div>
          </div>
          <div className={styles.card__icons}>
            <Link href="https://github.com/ExequielMaydana" target="_blank">
              <span className={styles.card__icon} data-tooltip="Repositorio">
                <i className="bx bxl-github"></i>
              </span>
            </Link>
            <Link
              href="https://closetwithoutgender.vercel.app/"
              target="_blank"
            >
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
