import './css/style.css';
import {Home} from "./Home";
import { Routes, Route } from "react-router-dom";
import {Bookings} from "./Bookings";
import {SignUp} from "./SignUp";
import {SignIn} from "./SignIn";
import {Navigate} from "react-router";
import {Trip} from "./Trip";

function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/trip:id" element={<Trip />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
    );
}

export default App;
