import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
