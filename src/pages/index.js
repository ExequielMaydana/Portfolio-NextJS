import styles from "@/styles/Home.module.css";
import Home from "../components/home/Home";
import AboutMe from "@/components/about/AboutMe";
import Portfolio from "@/components/portfolio/Portfolio";
import Skills from "@/components/skills/Skills";
import Carrera from "@/components/carrera/Carrera";
import Contact from "@/components/contact/Contact";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Portfolio\ExeDev</title>
        <meta name="author" content="Exequiel Maydana" />
        <meta
          name="description"
          content="Portafolio Exequiel Maydana, Exe Dev Portafolio. Todo sobre mi vida profesional como Desarrollador Web Full-Stack"
        />
        <meta name="application-name" content="Portfolio" />
        <meta
          name="Keywords"
          content="Desarrollo Frontend, Desarrollo Backend, Desarrollo Web FUll-Stack. coding, programming"
        />

        <meta property="og:title" content="Portfolio/ExeDev" />
        <meta property="og:type" content="Article" />
        <meta property="og:site_name" content="Portfolio/ExeDev" />
        <meta
          property="og:description"
          content="En mi portafolio podras saber un poco mas de mi y mi vida profesional como asi tambien poder ver algunos trabajos que he realizado."
        />
        <meta property="og:url" content="https://exedev.netlify.app/" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/leterED.ico" />
      </Head>

      <main className={styles.main}>
        <Home />
        <AboutMe />
        <Portfolio />
        {/*
        <Skills/>
        <Carrera/>
        <Contact/> */}
      </main>
    </>
  );
};

export default Index;
