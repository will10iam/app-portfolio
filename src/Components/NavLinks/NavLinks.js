import { useState } from "react";
import { NavLink } from "react-router-dom";

import open from "../../Assets/open.svg"
import close from "../../Assets/close.svg"




const NavLinks = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <button className="dropdown-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                    <img className="closeMenu" src={close} alt="Close" />
                ) : (
                    <img className="openMenu" src={open} alt="Open" />
                )}
            </button>
            <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
                <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</NavLink>
                <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </nav>



        </>
    );
};

export default NavLinks;