import "./Protient.css"
import Apteka from "./img/apteka.svg"
import Five from "./img/five.svg"
import Litres from "./img/litres.svg"
function Protient() {
    return (
        <div className="bonus">
            <div className="bonus_flex">
                <div className="bonus_img">
                    <div className="bonus_img-flex">
                        <p>3%</p>
                        <img src={Apteka} alt="Apteka" />
                    </div>
                    <div className="bonus_img-flex ">
                        <p className="bonus_img-flex1">1,5%</p>
                        <img src={Five} alt="Five" />
                    </div>
                    <div className="bonus_img-flex">
                        <p>5%</p>
                        <img src={Litres} alt="Litres" />
                    </div>
                </div>
                <div className="bonus_text">
                    Большой % начисления
                </div>
            </div>
        </div>
    );
}

export default Protient;
