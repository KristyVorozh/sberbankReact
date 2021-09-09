import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function LinksPartner() {
    return (
        <BrowserRouter>
        <div className="links_partner">                      
            <Link>Все партнеры</Link>
            <Link>Популярные</Link>
            <Link>Супермаркеты</Link>
            <Link>Кафе и рестораны</Link>
            <Link>Такси</Link>
            <Link>Красота</Link>
            <Link className="links_active">Электроника и бытовая техника</Link>
            <Link>Зоотовары</Link>
            <Link>Кино и театр</Link>
            <Link>• • •</Link>
        </div>
        </BrowserRouter>
    );
}

export default LinksPartner;