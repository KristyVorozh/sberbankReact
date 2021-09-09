import "./footer.css"
import React from 'react';
import Links from "../Links/Links"
import { BrowserRouter, Link } from 'react-router-dom';
import Sberbank from "./img/sberlogo.svg"
import Google from "./img/google.svg"
import Apple from "./img/apple.svg"
import Ok from "./img/ok.svg"
import Fb from "./img/fb.svg"
import Vk from "./img/vk.svg"
import Inst from "./img/inst.svg"
function Footer() {
    return (
        <BrowserRouter>
        <div className="footer">
            <div className="container">
                <div className="footer_flex">
                    <div className="footer_phone">
                        <a href="tel:900">900</a>
                        <p>По России бесплатно</p>
                    </div>
                    <img className="sberbank" src={Sberbank} alt="Sberbank" />
                </div>
                <div className="footer_flex">
                
                        <Links />
                    <div className="footer_flex-href">
                        <div className="footer_flex-img">
                            <a href="https://play.google.com/store?hl=ru"><img src={Google} alt="Google" /></a>
                            <a href="https://www.apple.com/ru/store"><img src={Apple} alt="Apple" /></a>
                        </div>
                        <div className="footer_flex-img">
                            <a href="https://ok.ru/"><img src={Ok} alt="Ok" /></a>
                            <a href="https://ru-ru.facebook.com/"><img src={Fb} alt="Fb" /></a>
                            <a href="https://vk.com/"><img src={Vk} alt="Vk" /></a>
                            <a href="https://www.instagram.com/"><img src={Inst} alt="Inst" /></a>
                        </div>
                    </div>
                </div>
                </div>
                <div className="footer_flex1">
                    <p>© 1997—2019 ПАО Сбербанк.</p>
                    <p><span>Политика</span> АО «ЦПЛ» в отношении обработки персональных данных и Согласие на обработку данных участника Программы «Спасибо от Сбербанка»</p>
                </div>
        </div>
        </BrowserRouter>
    );
}

export default Footer;
