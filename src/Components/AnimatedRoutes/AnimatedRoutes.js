import { Routes, Route, useLocation } from "react-router-dom"

import Home from "../../Pages/Home/home"
import About from "../../Pages/About/about";


export default function AnimatedRoutes({ personalDetails }) {
    const location = useLocation();


    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home name={personalDetails.name} tagline={personalDetails.tagline} />} />
            <Route
                path="/about"
                element={
                    <About
                        name={personalDetails.name}
                        location={personalDetails.location}
                        email={personalDetails.email}
                        availability={personalDetails.availability}
                        brand={personalDetails.brand}
                    />
                }
            />
        </Routes>
    )
}