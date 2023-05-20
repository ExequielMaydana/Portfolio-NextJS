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
          content="Portafolio Exequiel Maydana, Exe Dev Portafolio. Todo sobre mi vida profesional como Desarrollador Web Full-Stack"
        />
        <meta name="application-name" content="Portfolio" />
        <meta
          name="Keywords"
          content="Desarrollo Frontend, Desarrollo Backend, Desarrollo Web FUll-Stack. coding, programming"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
