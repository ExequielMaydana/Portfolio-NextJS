import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Home from "../components/home/Home";
import AboutMe from "@/components/about/AboutMe";
import Portfolio from "@/components/portfolio/Portfolio";
import Skills from "@/components/skills/Skills";
import Carrera from "@/components/carrera/Carrera";
import Contact from "@/components/contact/Contact";

const inter = Inter({ subsets: ["latin"] });

const Index = () => {
  return (
    <>
      <main className={styles.main}>
        <Home />
        <AboutMe/>
        <Portfolio/>
        <Skills/>
        <Carrera/>
        <Contact/>
      </main>
    </>
  );
};

export default Index;
