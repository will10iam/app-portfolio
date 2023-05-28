import { Routes, Route, useLocation } from "react-router-dom"

import Home from "../../Pages/Home/home"


export default function AnimatedRoutes({ personalDetails }) {
    const location = useLocation();


    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home name={personalDetails.name} tagline={personalDetails.tagline} />} />
        </Routes>
    )
}