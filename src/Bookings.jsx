import { Header } from "./Header";
import { Footer } from "./Footer";
import { BookingCard } from "./BookingCard";
import {useEffect, useState} from "react";
import bookingsJSON from "./data/bookings.json"

export function Bookings() {
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        loadBookings();
    }, [])

    const loadBookings = () => {
        setBookings(structuredClone(bookingsJSON).sort((a, b) => new Date(a.date) - new Date(b.date)))
    }

    const cancelHandler = (index) => {
        setBookings(structuredClone(bookings.filter((_, i) => i !== index)))
    }

    return (
        <div className='BookingsPage page-wrapper'>
            <Header></Header>
            <main className="bookings-page">
                <h1 className="visually-hidden">Travel App</h1>
                <ul className="bookings__list">
                    {
                        bookings
                            .map((booking, index) => {
                            return <BookingCard bookingData={booking} onClose={()=>cancelHandler(index)}></BookingCard>;
                        })
                    }
                </ul>
            </main>
            <Footer></Footer>
        </div>
    );
}