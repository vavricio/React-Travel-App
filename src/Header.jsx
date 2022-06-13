import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header className="header">
            <div className="header__inner">
                <Link className="header__logo" to='/'>
                    Travel App
                </Link>
                <nav className="header__nav">
                    <ul className="nav-header__list">
                        <li className="nav-header__item" title="Bookings">

                            <Link className="nav-header__inner" to='/bookings'>
                                <span className="visually-hidden">Bookings</span>
                                <img src='/assets/images/briefcase.svg' alt=" icon"/>
                            </Link>
                        </li>
                        <li className="nav-header__item" title="Profile">
                            <div className="nav-header__inner profile-nav" tabIndex="0">
                                <span className="visually-hidden">Profile</span>
                                <img src="/assets/images/user.svg" alt="profile icon"/>
                                <ul className="profile-nav__list">
                                    <li className="profile-nav__item profile-nav__username">John Doe</li>
                                    <li className="profile-nav__item">
                                        <button className="profile-nav__sign-out button">Sign Out</button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}