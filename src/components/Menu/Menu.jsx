import LinkButton from "../LinkButton/LinkButton";

const Menu = ({ links, className, children }) => {

    return (

        <menu className={`menu ${className}_menu`}>
            {links.map(link => <li className={`menu_item ${className}_item`}><LinkButton className={className} href={link.href} label={link.label}/></li>)}
            { children }
        </menu>

    )
};

export default Menu;