import React from "react";
import {useState} from "react";

const Modal = props => {
    const [guests, setGuests] = useState(1);

    if (!props.show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="trip-popup">
                <button className="trip-popup__close" onClick={props.onClose}>×</button>
                <form className="trip-popup__form" autoComplete="off">
                    <div className="trip-info">
                        <h3 className="trip-info__title">{props.tripInfo.title}</h3>
                        <div className="trip-info__content">
                            <span className="trip-info__duration"><strong>{props.tripInfo.duration}</strong> days</span>
                            <span className="trip-info__level">{props.tripInfo.level}</span>
                        </div>
                    </div>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Date</span>
                        <input name="date" type="date" min={new Date().toLocaleDateString('en-CA')} required/>
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Number of guests</span>
                        <input name="guests" type="number" min="1" max="10" value={guests} onChange={e => setGuests(e.target.value)} required/>
                    </label>
                    <span className="trip-popup__total">
                        Total: <output className="trip-popup__total-value">{props.tripInfo.price*guests}$</output>
                    </span>
                    <button className="button" type="submit">Book a trip</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;