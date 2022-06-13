
export function BookingCard(props){
    return (
        <li className="booking" key={props.bookingData.id}>
            <h3 className="booking__title">{props.bookingData.trip.title}</h3>
            <span className="booking__guests">
                                {`${props.bookingData.guests} ${props.bookingData.guests === 1 ? 'guest' : 'guests'}`}
                            </span>
            <span className="booking__date">{new Date(props.bookingData.date).toLocaleDateString('ru')}</span>
            <span className="booking__total">{props.bookingData.trip.price} $</span>
            <button className="booking__cancel" title="Cancel booking" onClick={() => props.onClose()}>
                <span className="visually-hidden">Cancel booking</span>
                ×
            </button>
        </li>
    )
}