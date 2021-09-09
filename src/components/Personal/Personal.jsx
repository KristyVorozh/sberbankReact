import "./Personal.css"
import Ozon from "./img/ozon.svg"
import Tez from "./img/tez.svg"
import Booking from "./img/booking.svg"
import Sberbank from "./img/sberbank.svg"
import Tripster from "./img/tripster.svg"
function Personal() {
    return (
        <div className="bonus">
            <div className="bonus_flex">
                <div className="bonus_img">
                    <img src={Ozon} alt="Ozon" />
                    <img src={Tez} alt="Tez" />
                    <img src={Booking} alt="Booking" />
                    <img src={Sberbank} alt="Sberbank" />
                    <img src={Tripster} alt="Tripster" />
                </div>
                <div className="bonus_text">
                    Скидки за бонусы
                </div>
            </div>
        </div>
    );
}

export default Personal;
