import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        
        <header className="header">
            <a href="/" target="_self" className="header__link">
                <img src={logo} alt="Логотип" className="header__logo" />
            </a>
            <div className="header__info">
                <p className="header__email">{props.email}</p>
                {props.loggedIn ? <button onClick={props.onLogout} className="header__button">Выйти</button> : <Link to={props.link} className="header__text">{props.linkText}</Link>}
            </div>
        </header>
        
    )
}

export default Header;