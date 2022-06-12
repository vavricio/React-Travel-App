import { Link } from 'react-router-dom'
import { Footer } from "./Footer";

export function SignIn() {
    return (
        <div className='SignIn page-wrapper'>
            <header className="header">
                <div className="header__inner">
                    <Link className="header__logo" to='/'>
                        Travel App
                    </Link>
                </div>
            </header>
            <main className="sign-in-page">
                <h1 className="visually-hidden">Travel App</h1>
                <form className="sign-in-form" autoComplete="off">
                    <h2 className="sign-in-form__title">Sign In</h2>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Email</span>
                        <input name="email" type="email" required/>
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Password</span>
                        <input name="password" type="password" autoComplete="new-password"  minLength='3' maxLength='20' required/>
                    </label>
                    <button className="button" type="submit">Sign In</button>
                </form>
                <span>
                    Already have an account?
                    <Link className="sign-in-form__link" to='/sign-up'>Sign Up</Link>
                </span>
            </main>
            <Footer></Footer>
        </div>
    )
}
