
import "../Menu/app.css"
import React, { useState } from "react";
import AppleMusic from "./img/action.jpg";
import AppleIcon from "./img/apple.svg"
import AppleIconSmall from "./img/applesmall.svg"
import MetroGreen from "./img/metro_green.svg"
import MetroRed from "./img/metro_red.svg"
import { YMaps, Map, Placemark } from "react-yandex-maps";
const mapData = {
    center: [55.739792, 37.633517],
    zoom: 16,
  };
  
  const coordinates = [
    [55.739792, 37.633517],
  ];
  
function Apple() {
    const [cont1, setCont1] = useState(true);
    const [cont2, setCont2] = useState(false);
    const [cont3, setCont3] = useState(false);
    const changeActiveCont = (index) => {
        switch (index){
            case 1:
                setCont1(true);
                setCont2(false);
                setCont3(false);
                break;
            case 2:
                setCont1(false);
                setCont2(true);
                setCont3(false);
                break;
            case 3:
                setCont1(false);
                setCont2(false);
                setCont3(true);
                break;
        }
    }


return (
    <div className="apple">
    <div className="container">
        <div className="apple_link">
            <a href="#">Скидочные купоны · </a>
            <a href="#">Развлечения</a>
        </div>
        <h1>Apple Music за СПАСИБО</h1>
        <div className="apple_container">
            <img className="apple_container-img" src={AppleMusic} alt="AppleMusic" />
            <div className="apple_container-content">
            <p className="apple_container-date">C 17 Декабря 2018 г. по 17 Декабря 2019 г.</p>
            <div className="apple_container-ul">
                <p>Обменивайте 169 СПАСИБО на месяц подписки в Apple Music и наслаждайтесь любимой музыкой без перерыва.</p>
                <ul>
                    <li>Получите доступ к миллионам альбомов, исполнителей и песен</li>
                    <li>Эксклюзивный и оригинальный контент</li>
                    <li>Вы можете отказаться от подписки в любой момент</li>
                    <li>Скачивайте любимую музыку и слушайте офлайн</li>
                </ul>
            </div>
            <div className="apple_container-promo">
                <p>Как использовать промо-код:</p>
                <ul>
                    <li>Откройте приложение «Музыка» и введите существующий Apple ID и пароль для входа в учетную запись.(Если у   вас нет Apple ID, вам будет предложено его создать).</li>
                    <li>Нажмите на «3 месяца бесплатно» (специальное предложение для новых пользователей).</li>
                    <li>Выберите индивидуальную подписку и нажмите «3 месяца бесплатно».</li>
                    <li>Перейдите в учетную запись.</li>
                    <li>Нажмите «Использовать код».</li>
                    <li>Введите 12-значный код.</li>
                    <li>Получите сообщение с подтверждением использования кода.</li>
                </ul>
            </div>
            <div className="apple_container-text">
            Под персональными данными в целях настоящих Правил понимаются персональные данные Участников Акции и иных лиц - субъектов персональных данных как они определены в Законе «О персональных данных». Под обработкой персональных данных в настоящих <span>Правилах понимается любое действие</span>  (операция), совершаемое в целях проведения Акции, или совокупность действий(операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных
            данных, предоставленных Участником Акции Банку/ Уполномоченной Компании.
            </div>
            <div className="apple_container-link">
                <a className="apple_container-link_href" href="#">Подробнее об Apple Music для Android</a>
                <a className="apple_container-link_href2" href="#">Правила акции</a>
            </div>
            <div className="apple_container-text_footer">
            Только при оформлении индивидуальной подписки. По окончании пробного периода подписка будет продлена автоматически. 4 месяца бесплатно только для новых подписчиков. Срок действия кода истекает 31 января 2020 года. Это промокод, который не подлежит перепродаже, обмену на денежный эквивалент и замене в случае кражи или потери. Предложение действительно при оформлении индивидуальной подписки на Apple Music на территории Российской Федерации. Требуется учетная запись iTunes. Применяются соответствующие условия <a href="#">(подробнее)</a>
            <br />Промокодом может воспользоваться лицо старше 13 лет, чье местоположение совпадает со страной/регионом магазина, в котором активируется код.
            Требуются совместимые продукты и сервисы. Apple Music — зарегистрированная торговая марка Apple. Apple не является участником или спонсором этой промоакции.
            </div>
            </div>
        </div>
        <div className="apple_music">
            <img src={AppleIcon} alt="AppleIcon" />
            <p>Apple Music</p>
        </div>
        <div className="apple_music-content">
            <div className={cont1 ? "active" :"apple_music-content_container"} onClick={() => changeActiveCont(1)}>
                <div className="apple_music-flex">
                <img src={AppleIconSmall} alt="AppleIconSmall" />
                <div className="apple_music-text">
                    <p>Москва, ул. Большая Татарская, 21</p>
                    <div className="apple_music-text_p">
                        <p className="apple_music_p1"><span><img src={MetroGreen} alt="MetroGreen" /></span>Маяковская</p>
                        <p><span><img src={MetroRed} alt="MetroRed" /></span>Лубянка</p>
                    </div>
                    <p>+7 495 220-30-44</p>
                    <p>Ежедневно с 09:00 до 21:00</p>
                    <a href="https://www.apple.com/ru/">apple.com</a>
                    </div>
                </div>
                <div className="apple_music-trevel">Проложить маршрут</div>
            </div>
            <div className={cont2 ? "active" : "apple_music-content_container"} onClick={() => changeActiveCont(2)}>
                <div className="apple_music-flex">
                <img src={AppleIconSmall} alt="AppleIconSmall" />
                <div className="apple_music-text">
                    <p>Москва, ул. Большая Татарская, 21</p>
                    <div className="apple_music-text_p">
                        <p className="apple_music_p1"><span><img src={MetroGreen} alt="MetroGreen" /></span>Маяковская</p>
                        <p><span><img src={MetroRed} alt="MetroRed" /></span>Лубянка</p>
                    </div>
                    <p>+7 495 220-30-44</p>
                    <p>Ежедневно с 09:00 до 21:00</p>
                    <a href="https://www.apple.com/ru/">apple.com</a>
                    </div>
                </div>
                <div className="apple_music-trevel">Проложить маршрут</div>
            </div>
            <div className={cont3 ? "active" : "apple_music-content_container"} onClick={() => changeActiveCont(3)}>
                <div className="apple_music-flex">
                <img src={AppleIconSmall} alt="AppleIconSmall" />
                <div className="apple_music-text">
                    <p>Москва, ул. Большая Татарская, 21</p>
                    <div className="apple_music-text_p">
                        <p className="apple_music_p1"><span><img src={MetroGreen} alt="MetroGreen" /></span>Маяковская</p>
                        <p><span><img src={MetroRed} alt="MetroRed" /></span>Лубянка</p>
                    </div>
                    <p>+7 495 220-30-44</p>
                    <p>Ежедневно с 09:00 до 21:00</p>
                    <a href="https://www.apple.com/ru/">apple.com</a>
                    </div>
                </div>
                <div className="apple_music-trevel">Проложить маршрут</div>
            </div>
        </div>
        <div className="maps">
        <YMaps>
            <Map  width='100%'
            height='500px' defaultState={mapData}>
            {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
            </Map>
        </YMaps>
        </div>
    </div>
    </div>
);
}

export default Apple;
