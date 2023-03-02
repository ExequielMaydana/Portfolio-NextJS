import FloatingButton from "@/components/FloatingButton";
import NavBar from "@/components/shared/NavBar";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <Component {...pageProps} />
      <div className="containerBtnFloating">
        <FloatingButton setOpenMenu={setOpenMenu} openMenu={openMenu} />
      </div>
    </>
  );
}
