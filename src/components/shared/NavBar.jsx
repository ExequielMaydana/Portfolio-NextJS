import Image from "next/image";
import React from "react";
import style from "../../styles/NavBar.module.css";
import logo from "../../../public/imgs/logo.png";
import Link from "next/link";

const NavBar = ({ openMenu, setOpenMenu }) => {
  const closeMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className={style.header}>
        <figure className={style.headerFigure}>
          <Image src={logo} alt="logo" className={style.headerLogo} />
        </figure>

        <nav
          className={`${
            openMenu ? `${style.openMenu} ${style.navOpenMenu}` : style.nav
          } `}
        >
          <article className={style.navClose} onClick={closeMenu}>
            <i className="fa-solid fa-xmark"></i>
          </article>
          <figure className={style.navFigure}>
            <Image src={logo} alt="logo" className={style.navLogo} />
          </figure>
          <ul className={style.navMenu}>
            <li className={style.navLinks}>
              <Link href="/" className={style.links} onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li className={style.navLinks}>
              <Link href="#aboutMe" className={style.links} onClick={closeMenu}>
                Sobre mi
              </Link>
            </li>

            <li className={style.navLinks}>
              <Link
                href="/Portfolio"
                className={style.links}
                onClick={closeMenu}
              >
                Portfolio
              </Link>
            </li>

            <li className={style.navLinks}>
              <Link href="/skills" className={style.links} onClick={closeMenu}>
                Habilidades
              </Link>
            </li>

            <li className={style.navLinks}>
              <Link href="/career" className={style.links} onClick={closeMenu}>
                Carrera
              </Link>
            </li>

            <li className={style.navLinks}>
              <Link href="/contact" className={style.links} onClick={closeMenu}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
