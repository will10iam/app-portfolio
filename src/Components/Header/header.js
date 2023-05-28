import React from 'react'
import logo from '../../Assets/logo.svg'
import NavLinks from '../NavLinks/NavLinks'



export default function Header() {
    return (
        <header className='header'>
            <img className='logo' src={logo} alt="Logo Will" />
            <NavLinks />
        </header>
    )
}
