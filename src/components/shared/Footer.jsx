import Link from "next/link";
import React from "react";
import style from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={style.sectionFooter}>
        <div className={style.containerIconsFooter}>
          <Link
            href="https://www.linkedin.com/in/hernan-exequiel-maydana-913a50218/"
            target="_blank"
            className={style.iconFooter}
          >
            <i className="bx bxl-linkedin"></i>
          </Link>
          <Link
            href="https://github.com/ExequielMaydana"
            target="_blank"
            className={style.iconFooter}
          >
            <i className="bx bxl-github"></i>
          </Link>
          <Link
            href="https://www.instagram.com/exe._.dev/"
            target="_blank"
            className={style.iconFooter}
          >
            <i className="bx bxl-instagram"></i>{" "}
          </Link>
        </div>
        <p className={style.paragraphFooter}>
          Copyright © Exequiel Maydana · 2023
        </p>
      </footer>
      <article>
        <div className="squares1"></div>
        <div className="squares2"></div>
      </article>
    </>
  );
};

export default Footer;
