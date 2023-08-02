
import NavLinks from '../NavLinks/NavLinks'
import logo from '../../Assets/logo.svg'

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="Will Logo" />
            <NavLinks />
        </header>
    )
}

export default Header;
