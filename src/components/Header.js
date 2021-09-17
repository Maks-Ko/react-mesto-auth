import logo from '../images/logo.svg';

function Header() {
    return (
        
        <header className="header">
            <a href="/" target="_self" className="header__link">
                <img src={logo} alt="Логотип" className="header__logo" />
            </a>
        </header>
        
    )
}

export default Header;