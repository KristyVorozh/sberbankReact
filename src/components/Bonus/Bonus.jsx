import "./Bonus.css"
import Burger from "./img/burger.svg"
import Five from "./img/five.svg"
import Respublica from "./img/respublica.svg"
import Megafon from "./img/megafon.svg"
import Ivi from "./img/ivi.svg"
function Bonus() {
    return (
        <div className="bonus">
            <div className="bonus_flex">
                <div className="bonus_img">
                    <img src={Burger} alt="Burger" />
                    <img src={Five} alt="Five" />
                    <img src={Respublica} alt="Respublica" />
                    <img src={Megafon} alt="Megafon" />
                    <img src={Ivi} alt="Ivi" />
                </div>
                <div className="bonus_text">
                    Скидки за бонусы
                </div>
            </div>
        </div>
    );
}

export default Bonus;
