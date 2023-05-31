import styles from "@/styles/Home.module.css";
import Home from "../components/home/Home";
import AboutMe from "@/components/about/AboutMe";
import Portfolio from "@/components/portfolio/Portfolio";
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
          content="Portafolio Exequiel Maydana, todo sobre mi vida profesional como Desarrollador Web Full-Stack"
        />
        <meta name="application-name" content="Portfolio" />
        <meta
          name="Keywords"
          content="Desarrollo Frontend, Desarrollo Backend, Desarrollo Web Full-Stack. coding, programming"
        />
        <meta name="organization" content="Exe Developer" />
        <meta
          name="copyright"
          content="Copyright 2023 Soluciones Web Exe Developer"
        />
        <meta name="locality" content="Entre Rios, Argentina" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Exe Developer" />
        <meta
          property="og:description"
          content="Portafolio personal de Exequiel Maydana, Desarrollador Web Full-Stack."
        />
        <meta property="og:type" content="Article" />
        <meta property="og:url" content="https://exedeveloper.me/" />
        <meta
          property="og:image"
          content="https://exedeveloper.me/_ipx/w_384,q_75/%2F_next%2Fstatic%2Fmedia%2FleterED.7b613043.webp?url=%2F_next%2Fstatic%2Fmedia%2FleterED.7b613043.webp&w=384&q=75"
        />

        <link rel="icon" href="/leterED.ico" />
      </Head>

      <main className={styles.main}>
        <Home />
        <AboutMe />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};

export default Index;
