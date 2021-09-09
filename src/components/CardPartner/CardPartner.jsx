import "./CardPartner.css"
import Mvideo from "./img/mvideo.svg"
import Burger from "./img/burger.svg"
import Evro from "./img/evro.svg"
import Bork from "./img/bork.svg"
import Technopark from "./img/technopark.svg"

function CardPartner() {
    return (
        <div className="card_partner">
            <div className="card">
                <h1>1,5%</h1>
                <p>Спасибо от суммы покупки</p>
                <div className="partner_img">
                <img src={Mvideo} alt="Mvideo" />
                <p>М.Видео</p>
                </div>
            </div>
            <div className="card">
                <h1>3%</h1>
                <p>Спасибо от суммы покупки</p>
                <div className="partner_img">
                <img src={Burger} alt="Burger" />
                <p>Бургер Кинг </p>
                </div>
            </div>
            <div className="card">
                <h1>4,5%</h1>
                <p>Спасибо от суммы покупки</p>
                <div className="partner_img">
                <img src={Technopark} alt="Technopark" />
                <p>Холодильник.ру</p>
                </div>
            </div>
            <div className="card">
                <h1>От 1,5%</h1>
                <p>Спасибо от суммы покупки</p>
                <div className="partner_img">
                <img src={Bork} alt="Bork" />
                <p>BORK</p>
                </div>
            </div>
            <div className="card">
                <h1>1,5%</h1>
                <p>Спасибо от суммы покупки</p>
                <div className="partner_img">
                <img src={Evro} alt="Evro" />
                <p>Евросеть</p>
                </div>
            </div>
        </div>
    );
}

export default CardPartner;
