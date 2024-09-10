import { NavLink } from "react-router-dom";
import LinkButton from "../LinkButton/LinkButton";

const Menu = ({ links, className, children }) => {

    return (

        <menu className={`menu ${className}_menu`}>
            { links.map((link, i) => {
                return (
                <li key={`navlink-${i}`} className={`menu_item ${className}_item`}>
                    <NavLink to={link.href}>{link.label}</NavLink>
                </li>
                )
            } ) }
            { children }
        </menu>

    )
};

export default Menu;