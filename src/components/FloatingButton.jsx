import React from "react";
import style from "../styles/FloatingBtn.module.css";

const FloatingButton = ({ setOpenMenu, openMenu }) => {
  const goToMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={style.menuBurger} onClick={goToMenu}>
      <span className={openMenu ? style.activeLine1 : ""}></span>
      <span className={openMenu ? style.activeLine2 : ""}></span>
      <span className={openMenu ? style.activeLine3 : ""}></span>
    </div>
  );
};

export default FloatingButton;
