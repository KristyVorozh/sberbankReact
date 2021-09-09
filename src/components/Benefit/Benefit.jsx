import "./Benefit.css"
import Posuda from "./img/posuda.svg"
import Lamoda from "./img/lamoda.svg"
import Toys from "./img/toys.svg"
function Benefit() {
    return (
        <div className="bonus">
            <div className="bonus_flex">
                <div className="bonus_img">
                        <img src={Posuda} alt="Posuda" />
                        <img src={Lamoda} alt="Lamoda" />
                        <img src={Toys} alt="Toys" />
                </div>
                <div className="bonus_text">
                Выгодные купоны
                </div>
            </div>
        </div>
    );
}

export default Benefit;
