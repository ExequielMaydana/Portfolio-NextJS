import Image from "next/image";
import React from "react";
import style from "../../styles/Skills.module.css";
import logoNext from "../../../public/nextLogo.png";

const Skills = () => {
  return (
    <section id="skills" className={style.sectionSkills}>
    
    <div className={style.containerTitle}>
        <div className={style.greetingEmoji}>
            💻 Habilidades
        </div>
        <h2 className={style.titleSkills}>Mis Habilidades</h2>
    </div>



      <div className={style.containerSkills}>
        <div className={style.skill}>
          <i className="fa-brands fa-html5"></i>
          <p>HTML5</p>
        </div>
        <div className={style.skill}>
          <i className="fa-brands fa-css3-alt"></i>
          <p>CSS3</p>
        </div>
        <div className={style.skill}>
          <i className="fa-brands fa-square-js"></i>
          <p>JavaScript</p>
        </div>
        <div className={style.skill}>
          <i className="fa-brands fa-react"></i>
          <p>React.js</p>
        </div>
        <div className={style.skill}>
          <Image src={logoNext} alt="logoNextJS" className={style.logoNext} />
          <p>Next.js</p>
        </div>

        <div className={style.skill}>
          <i className="fa-brands fa-node-js"></i>
          <p>Node.js</p>
        </div>

        <div className={style.skill}>
          <i className="bx bxl-postgresql"></i>
          <p>PostgreSQL</p>
        </div>

        <div className={style.skill}>
          <i className="bx bxl-mongodb"></i>
          <p>MongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
