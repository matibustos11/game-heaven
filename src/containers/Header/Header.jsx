import logo from '../../assets/gameheaven-logo.jpeg';
import CartWidget from '../../components/CartWidget/CartWidget';
import Menu from '../../components/Menu/Menu';

const Header = () => {

    const links = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Tienda',
            href: '/tienda',
        },
        {
            label: 'Contacto',
            href: '/contacto',
        },
    ];

    return (
        <header className="header">

            <nav className="navbar container">
                <a className = "navbar_logo" href="/">
                    <figure>
                        <img className= "navbar_img" src= {logo} alt="Logo Game" />
                    </figure>
                </a>
                <Menu className= "navbar" links = {links}> 
                    <li>
                        <a href="" className='navbar_link-button'>
                            <CartWidget quantity={0} />
                        </a>
                    </li>
                </Menu>

            </nav>
        </header>
    );
}

export default Header;