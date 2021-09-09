import "./main.css"
import LinksPartner from "../LinksPartner/LinkPartner"
import CardPartner from "../CardPartner/CardPartner"
import Suggestions from "../Suggestions/Suggestions"
import Bonus from "../Bonus/Bonus"
import Protient from "../Protient/Protient"
import Benefit from "../Benefit/Benefit"
import Personal from "../Personal/Personal"
function Main() {
    return (
        <div className="main">
            <div className="container">
                <h1>Партнеры и предложения</h1>
                <LinksPartner />
                <div className="main_checkbox">
                    <p>Начисляют спасибо</p>
                    <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                    </label>
                    <p className="main_checkbox-active">Принимают спасибо</p>
                </div>
                <div className="main_partner-flex">
                    <CardPartner />
                    <button>Еще 4 партнера</button>
                </div>
                <div className="main_suggestions-flex">
                    <h1>3 предложения в категории «Электроника и бытовая техника»</h1>
                    <Suggestions />
                    <button>Еще 4 предложения</button>
                </div>
                <div className="sale">
                    <Bonus />
                    <Protient />
                    <Benefit />
                    <Personal />
                </div>
                </div>
        </div>
    );
}

export default Main;
