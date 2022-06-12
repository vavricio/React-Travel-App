import { Link } from 'react-router-dom'
import { Footer } from "./Footer";

export function SignUp() {
    return (
        <div className='SignUp page-wrapper'>
            <header className="header">
                <div className="header__inner">
                    <Link className="header__logo" to='/'>
                        Travel App
                    </Link>
                </div>
            </header>
            <main className="sign-up-page">
                <h1 className="visually-hidden">Travel App</h1>
                <form className="sign-up-form" autoComplete="off">
                    <h2 className="sign-up-form__title">Sign Up</h2>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Full name</span>
                        <input name="full-name" type="text" required/>
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Email</span>
                        <input name="email" type="email" required/>
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Password</span>
                        <input name="password" type="password" autoComplete="new-password"  minLength='3' maxLength='20' required/>
                    </label>
                    <button className="button" type="submit">Sign Up</button>
                </form>
                <span>
                    Already have an account?
                    <Link className="sign-up-form__link" to='/sign-in'>Sign In</Link>
                </span>
            </main>
            <Footer></Footer>
        </div>
    )
}

