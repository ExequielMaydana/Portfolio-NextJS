import React from "react";
import style from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.sectionFooter}>
      <div className={style.containerIconsFooter}>
          <div className={style.iconFooter}>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
          <div className={style.iconFooter}>
            <i className="fa-brands fa-github"></i>
          </div>
          <div className={style.iconFooter}>
            <i className="fa-brands fa-instagram"></i>
          </div>
      </div>
      <p className={style.paragraphFooter}>Copyright © Exequiel Maydana · 2023</p>

    </footer>
  );
};

export default Footer;
