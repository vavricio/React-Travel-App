import { Link } from 'react-router-dom'
import { Header } from "./Header";
import { Footer } from "./Footer";
import trips from './data/trips.json';
import {useState} from "react";

const DurationMatch = Object.freeze({
        "": (_) => true,
        "0_x_5": (daysNum) => {return daysNum < 5},
        "5_x_10": (daysNum) => {return daysNum < 10},
        "10_x": (daysNum) => {return daysNum >= 10},
    }
)

export function Home() {
    const [level, setLevel] = useState('');
    const [duration, setDuration] = useState('');
    const [title, setTitle] = useState('');

    return (
        <div className='Home page-wrapper'>
            <Header></Header>
            <main className='Home'>
                <h1 className="visually-hidden">Travel App</h1>
                <section className="trips-filter">
                    <h2 className="visually-hidden">Trips filter</h2>
                    <form className="trips-filter__form" autoComplete="off">
                        <label className="trips-filter__search input">
                            <span className="visually-hidden">Search by name</span>
                            <input name="search" type="search" placeholder="search by title"
                                   value={title} onChange={e => setTitle(e.target.value)}/>
                        </label>
                        <label className="select">
                            <span className="visually-hidden">Search by duration</span>
                            <select name="duration" value={duration} onChange={e => setDuration(e.target.value)}>
                                <option value="">duration</option>
                                <option value="0_x_5">&lt; 5 days</option>
                                <option value="5_x_10">&lt; 10 days</option>
                                <option value="10_x">&ge; 10 days</option>
                            </select>
                        </label>
                        <label className="select">
                            <span className="visually-hidden">Search by level</span>
                            <select name="level" value={level} onChange={e => setLevel(e.target.value)}>
                                <option value="">level</option>
                                <option value="easy">easy</option>
                                <option value="moderate">moderate</option>
                                <option value="difficult">difficult</option>
                            </select>
                        </label>
                    </form>
                </section>
                <section className="trips">
                    <h2 className="visually-hidden">Trips List</h2>
                    <ul className="trip-list">
                        {
                            trips
                                .filter(trip => level === "" ? true : trip.level === level)
                                .filter(trip => DurationMatch[duration](trip.duration))
                                .filter(trip => title === '' ? true : trip.title.toLowerCase().includes(title.toLowerCase()))
                                .map((trip, index) => {
                                return (
                                    <li className="trip-card" key={trip.id}>
                                        <img src={trip.image} alt="trip image"/>
                                        <div className="trip-card__content">
                                            <div className="trip-info">
                                                <h3 className="trip-info__title">{trip.title}</h3>
                                                <div className="trip-info__content">
                                                    <span className="trip-info__duration"><strong>{trip.duration}</strong> days</span>
                                                    <span className="trip-info__level">{trip.level}</span>
                                                </div>
                                            </div>
                                            <div className="trip-price">
                                                <span>Price</span>
                                                <strong className="trip-price__value">{trip.price} $</strong>
                                            </div>
                                        </div>
                                        <Link className="button" to={`trip:${trip.id}`}>
                                            Discover a trip
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
}