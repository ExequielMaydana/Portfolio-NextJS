import Image from "next/image";
import React from "react";
import style from "../../styles/Home.module.css";
import avatar from "../../../public/imgs/myAvatar.png";
import Link from "next/link";

const Home = () => {
  return (
    <section className={style.home}>
      <div className={style.netContainer}>
        <Link href="https://www.linkedin.com/in/hernan-exequiel-maydana-913a50218/" target="_blank" className={style.net}>
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>
        <Link href="https://github.com/ExequielMaydana" target="_blank" className={style.net}>
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link href="https://www.instagram.com/exe._.dev/" target="_blank" className={style.net}>
          <i className="fa-brands fa-instagram"></i>
        </Link>
      </div>

      <div className={style.containerAvatar}>
        <div className={style.containerCircle}>
          <div className={style.circle}></div>

          <Image src={avatar} alt="my avatar" className={style.myAvatar} />
          <div className={style.skillFloatingReact}>
            <i className="fa-brands fa-react"></i>
          </div>
          <div className={`${style.skillFloatingNode}`}>
            <i className="fa-brands fa-node-js"></i>
          </div>
          <div className={style.skillFloatingJs}>
            <i className="fa-brands fa-js"></i>
          </div>
        </div>

        {/* este queda oculto en mobile, lo muestro en desktop */}
        <div className={style.containerBtnsDesktop}>
          <Link
            href="/cv.pdf"
            download="cv-maydana-hernan-exequiel"
            className={style.btnCvDesktop}
            target="_blank"
          >
            Descargar CV
            <i className="fa-solid fa-cloud-arrow-down"></i>
          </Link>

          <Link
            href="https://api.whatsapp.com/send/?phone=543454076854"
            target="_blank"
            className={style.btnWhatsDesktop}
          >
            <i className="fa-brands fa-whatsapp"></i>
            Vamos conversar
          </Link>
        </div>
      </div>

      <div className={style.containerGreetings}>
        <div className={style.greetingsEmoji}>👋 ¡Saludos!</div>
        <h1 className={style.titleGreetings}>
          Exequiel
          <br />
          Maydana
        </h1>
        <p className={style.subtitleGreetings}>Desarrollador Web Full-Stack</p>

        <div className={style.containerBtnsMobile}>
          <Link
            href="/cv.pdf"
            download="cv-maydana-hernan-exequiel"
            className={style.btnDownloadCvMob}
            target="_blank"
          >
            Descargar CV
            <i className="fa-solid fa-cloud-arrow-down"></i>
          </Link>

          <Link
            href="https://api.whatsapp.com/send/?phone=543454076854"
            target="_blank"
            className={style.btnWhats}
          >
            <i className="fa-brands fa-whatsapp"></i>
            Vamos conversar
          </Link>
        </div>
        {/* este aparece en desktop */}
        <div className={style.netContainerDesktop}>
          <Link href="https://www.linkedin.com/in/hernan-exequiel-maydana-913a50218/" target="_blank" className={style.net}>
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link href="https://github.com/ExequielMaydana" target="_blank" className={style.net}>
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link href="https://www.instagram.com/exe._.dev/" target="_blank" className={style.net}>
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
