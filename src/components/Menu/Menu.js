import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer"
import "./app.css"
import Links from "../Links/Links.jsx";
import Close from "./img/close.svg"
import Menu from "./img/menu.svg"
import React, { useState } from "react";

function Menuy() {
  const [state, setstate] = useState(false);
  return (
    <>
    <div className="menu">
    {state&&
    <div className="links_media">
      <Links />
      <img src={Close} alt="Close" onClick={()=>setstate(false)} />
      </div>
    }
    <img className="burger_menu" src={Menu} alt="Menu" onClick={()=>setstate(true)} />
    </div>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Menuy;
