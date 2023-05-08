import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import { useEffect, useState } from "react";

import "@/styles/globals.css";
import LoadingLine from "@/components/loading/LoadingLine";

export default function App({ Component, pageProps }) {

  const [renderOn, setRenderOn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRenderOn(false);
    }, 3000);
  }, []);

  return (
    <>
      {renderOn ? (
        <LoadingLine />
      ) : (
        <>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}
