import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import {faShoppingBasket,faTags} from '@fortawesome/free-solid-svg-icons'
const Header=()=>{
    return(
        <header className="header">
            <div className="contianer">
                <a href="/" className="link">
                    <FontAwesomeIcon icon={faTags} className='fa-icon'/>
                    <span className="brand-title">
                        Eazy Stickers
                    </span>
                </a>
                <nav className="nav">
                    <ul>
                        <li>
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li>
                            <a href="/" className="nav-link">About</a>
                        </li>
                        <li>
                            <a href="/" className="nav-link">Contact</a>
                        </li>
                        <li>
                            <a href="/" className="nav-link">Login</a>
                        </li>
                        <li>
                            <a href="/" className="nav-link">
                                <FontAwesomeIcon icon={faShoppingBasket} className='fa-icon'/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header