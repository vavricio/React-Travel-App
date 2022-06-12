import { Header } from "./Header";
import { Footer } from "./Footer";
import bookings from "./data/bookings.json";

export function Bookings() {
    return (
        <div className='BookingsPage page-wrapper'>
            <Header></Header>
            <main className="bookings-page">
                <h1 className="visually-hidden">Travel App</h1>
                <ul className="bookings__list">
                    {
                        bookings.map((booking, index) => {
                            return (
                                <li className="booking" key={booking.id}>
                                    <h3 className="booking__title">{booking.trip.title}</h3>
                                    <span className="booking__guests">
                                {`${booking.guests} ${booking.guests === 1 ? 'guest' : 'guests'}`}
                            </span>
                                    <span className="booking__date">{new Date(booking.date).toLocaleDateString('ru')}</span>
                                    <span className="booking__total">{booking.trip.price} $</span>
                                    <button className="booking__cancel" title="Cancel booking">
                                        <span className="visually-hidden">Cancel booking</span>
                                        ×
                                    </button>
                                </li>
                            );
                        })
                    }
                </ul>
            </main>
            <Footer></Footer>
        </div>
    );
}