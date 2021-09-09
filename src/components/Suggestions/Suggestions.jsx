import "./Suggestions.css"
import Technopark from "./img/technopark.png"
import TechnoparkSmall from "./img/technoparksmall.svg"
import Evro from "./img/evro.png"
import EvroSmall from "./img/evrosmall.svg"
import Mvideo from "./img/mvideo.png"
import MvideoSmall from "./img/mvideosmall.svg"

function Suggestions() {
    return (
        <div className="suggestions">
            <div className="suggestions_flex">
            <img className="suggestions_flex-img" src={Technopark} alt="Technopark"/>
            <div className="suggestions_flex-text">
                <img src={TechnoparkSmall} alt="TechnoparkSmall"/>
                <div className="suggestions_flex-info">
                    <p>Технопарк</p>
                    <div className="suggestions_title">20% спасибо за технику Electrolux</div>
                </div>
            </div>
            </div>
            <div className="suggestions_flex">
            <img className="suggestions_flex-img" src={Evro} alt="Evro"/>
            <div className="suggestions_flex-text">
                <img src={EvroSmall} alt="EvroSmall"/>
                <div className="suggestions_flex-info">
                    <p>Евросеть</p>
                    <div className="suggestions_title">10% спасибо за покупки в черную пятницу</div>
                </div>
            </div>
            </div>
            <div className="suggestions_flex">
            <img className="suggestions_flex-img" src={Mvideo} alt="Mvideo"/>
            <div className="suggestions_flex-text">
                <img src={MvideoSmall} alt="MvideoSmall"/>
                <div className="suggestions_flex-info">
                    <p>М.Видео</p>
                    <div className="suggestions_title">15% спасибо для студентов</div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Suggestions;
