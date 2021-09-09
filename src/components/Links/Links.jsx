import "./links.css"
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function Links() {
    return (
        <BrowserRouter>
        <div className="header_text">                      
            <Link>Купоны и сертификаты</Link>
            <Link>Впечатления</Link>
            <Link>Авиабилеты</Link>
            <Link>Ж/д билеты</Link>
            <Link>Отели</Link>
            <Link>Каршеринг</Link>
            <Link>Театры</Link>
            <a href="/hol">Страхование</a>
            <Link>Как подключиться</Link>
            <Link className="link_active">Партнеры</Link>
        </div>
        </BrowserRouter>
    );
}

export default Links;