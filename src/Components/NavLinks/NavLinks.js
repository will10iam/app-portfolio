import { useState } from "react";
import { NavLink } from "react-router-dom";

import openMenu from '../../Assets/open.svg'
import closeMenu from '../../Assets/close.svg'


export default function NavLinks() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <button className="dropwdown-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                    <img className="closeMenu" src={closeMenu} alt="Close" />
                ) : (
                    <img className="openMenu" src={openMenu} alt="Open" />
                )}
            </button>
            <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
                <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </nav>



        </>
    );
};