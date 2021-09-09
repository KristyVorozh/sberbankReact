import React, { useState } from "react";
import Header from "../Header/Header";
import Apple from "../Apple/Apple";
import Links from "../Links/Links.jsx";
import Close from "../Menu/img/close.svg";
import Menu from "../Menu/img/menu.svg";
import Footer from "../Footer/Footer";
import "./style.css"
function Hol() {
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
            <Apple />
            <div className="container">
            <Footer />
            </div>
        </>
    );
}

export default Hol;