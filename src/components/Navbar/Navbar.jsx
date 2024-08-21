import logo from '../../assets/gameheaven-logo.jpeg';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {

    return (
        <header className="header">
            <nav className="navbar container">
                <figure className="navbar_logo">
                    <img src= {logo} alt="Logo Game" />
                </figure>
                <ul className="navbar_menu">
                    <li className="navbar_item">
                        <a href="" className='navbar_link'>Shop</a>
                    </li>
                    <li className="navbar_item">
                        <a href="" className='navbar_link'>Contacto</a>
                    </li>
                    <li className="navbar_item">
                        <a href="" className='navbar_link'>Login</a>
                    </li>
                    <li>
                        <a href="" className='navbar_link'>
                            <CartWidget />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;