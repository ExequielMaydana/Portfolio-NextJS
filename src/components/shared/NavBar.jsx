import Image from "next/image";
import React, { useState } from "react";
import style from "../../styles/NavBar.module.css";
import Link from "next/link";
import logoNav from "../../../public/icons/leterED.webp";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className={style.header}>
        <div
          className={openMenu ? style.header__hideMenu : ""}
          onClick={closeMenu}
        >
          <i className="bx bx-menu"></i>
        </div>

        <div
          className={`${
            openMenu ? `${style.menu__open} ${style.menu}` : style.menu
          }`}
        >
          <nav
            className={openMenu ? `${style.nav__open} ${style.nav}` : style.nav}
          >
            <i className="bx bx-x" onClick={closeMenu}></i>

            <article className={style.nav__ctrLogo}>
              <Link href="/" onClick={closeMenu}>
                <Image
                  src={logoNav}
                  alt="logo menu"
                  className={style.nav__logo}
                />
              </Link>

              <span>
                Exe <b>D</b>ev
              </span>
              <span>Web Developer</span>
              <hr />
            </article>

            <ul className={style.nav__menu}>
              <li className={style.nav__item} onClick={closeMenu}>
                <Link
                  href="/sobremi"
                  className={style.nav__link}
                  onClick={closeMenu}
                >
                  Sobre mí
                </Link>
              </li>

              <li className={style.nav__item} onClick={closeMenu}>
                <Link
                  href="#portfolio"
                  className={style.nav__link}
                  onClick={closeMenu}
                >
                  Experiencia
                </Link>
              </li>

              <li className={style.nav__item} onClick={closeMenu}>
                <Link
                  href="#career"
                  className={style.nav__link}
                  onClick={closeMenu}
                >
                  Portafolio
                </Link>
              </li>

              <li className={style.nav__item} onClick={closeMenu}>
                <Link
                  href="/contact"
                  className={style.nav__link}
                  onClick={closeMenu}
                >
                  Contacto
                </Link>
              </li>
              <hr />
            </ul>
            <article className={style.nav__footer}>
              <Link
                href="https://www.linkedin.com/in/hernan-exequiel-maydana-913a50218/"
                target="_blank"
                className={style.nav__footerCtrIcon}
              >
                <i className="bx bxl-linkedin"></i>
              </Link>
              <Link
                href="https://github.com/ExequielMaydana"
                target="_blank"
                className={style.nav__footerCtrIcon}
              >
                <i className="bx bxl-github"></i>
              </Link>

              <Link
                href="https://twitter.com/ExeBikerr"
                target="_blank"
                className={style.nav__footerCtrIcon}
              >
                {" "}
                <i className="bx bxl-twitter"></i>
              </Link>

              <Link
                href="https://www.facebook.com/exe.maydana.3"
                target="_blank"
                className={style.nav__footerCtrIcon}
              >
                <i className="bx bxl-facebook"></i>
              </Link>
            </article>
            {/* darkMode */}
            {/* <div className={style.nav__ctrBtnLightMode}>
              <div className="toggleWrapper">
                <input type="checkbox" className="dn" id="dn" />
                <label htmlFor="dn" className="toggle">
                  <span className="toggle__handler">
                    <span className="crater crater--1"></span>
                    <span className="crater crater--2"></span>
                    <span className="crater crater--3"></span>
                  </span>
                  <span className="star star--1"></span>
                  <span className="star star--2"></span>
                  <span className="star star--3"></span>
                  <span className="star star--4"></span>
                  <span className="star star--5"></span>
                  <span className="star star--6"></span>
                </label>
              </div>
            </div> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
