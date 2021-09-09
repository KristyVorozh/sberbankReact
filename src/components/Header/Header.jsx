import "./header.css"
import Logo from "./img/logo.svg"
import Triangle from "./img/triangle.svg"
import Lupa from "./img/lupa.svg"
import Links from "../Links/Links"
import React, { useState } from "react";

function Header() {
  const [town, setTown] = useState(false);
  const [search, setSearch] = useState(false);
    return (
      <div className="container">
      <div className="header">
        <div className="header_flex">
          <a href="/"><img src={Logo} alt="Logo"/></a>
          <div className="links_flex">
            <Links />
          </div>
          {town&&
          <div className="town_change">
            <p>Ваш город <span>Санкт-Петербург?</span></p>
            <div className="town_change-button">
              <button className="button" onClick={()=>setTown(false)}>Да</button>
              <button>Сменить город</button>
            </div>
          </div>
          }
          {search&&
          <div className="search_change">
            <input type="text" placeholder="Поиск"/>
            <img onClick={()=>setSearch(false)} src={Lupa} alt="Lupa" />
          </div>
          }
          <div className="header_flex-right">
          <div className="header_flex-town">
          <img src={Triangle} alt="Triangle"/>
          <p onClick={()=>setTown(true)}>Санкт-Петербург</p>
          
          </div>
          <div className="header_flex-exit">
          <img onClick={()=>setSearch(true)} src={Lupa} alt="Lupa"/>
          <button>Войти</button>
          </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default Header;
  