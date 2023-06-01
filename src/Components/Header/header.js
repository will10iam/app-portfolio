
import NavLinks from '../NavLinks/NavLinks'
import logo from '../../Assets/logo.svg'



export default function Header() {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="Logo Will" />
            <NavLinks />
        </header>
    )
}
