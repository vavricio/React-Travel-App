import { Header } from "./Header";
import { Footer } from "./Footer";
import Modal from "./Modal";
import {useParams} from "react-router";
import trips from './data/trips.json'
import {useState} from "react";


export function Trip(){
    const params = useParams();
    const tripInfo = trips.find(trip => trip.id === params.id.substring(1));
    const [show, setShow] = useState(false);

    return (
        <div className='Trip page-wrapper'>
            <Header></Header>
            <main className="trip-page">
                <h1 className="visually-hidden">Travel App</h1>
                <div className="trip">
                    <img src={tripInfo.image} className="trip__img" alt="trip image"/>
                    <div className="trip__content">
                        <div className="trip-info">
                            <h3 className="trip-info__title">{tripInfo.title}</h3>
                            <div className="trip-info__content">
                                <span className="trip-info__duration"><strong>{tripInfo.duration}</strong> days</span>
                                <span className="trip-info__level">{tripInfo.level}</span>
                            </div>
                        </div>
                        <div className="trip__description">
                            {tripInfo.description}
                        </div>
                        <div className="trip-price">
                            <span>Price</span>
                            <strong className="trip-price__value">{tripInfo.price} $</strong>
                        </div>
                        <button className="trip__button button" onClick={() => setShow(true)}>Book a trip</button>
                    </div>
                </div>
            </main>
            <Footer></Footer>
            <Modal onClose={() => setShow(false)} show={show} tripInfo={tripInfo}></Modal>
        </div>
    )
}