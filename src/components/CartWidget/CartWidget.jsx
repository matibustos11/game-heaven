import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { Icon } from '@iconify/react';
import Pill from '../Pill/Pill';

const CartWidget = () => {
    const { getTotalItems } = useContext(CartContext);
    const totalItems = getTotalItems();

    return (
        <div className='cart-widget'>
            <Icon className='cart-widget-icon' icon="ic:sharp-shopping-cart" />
            {totalItems > 0 && <Pill>{totalItems}</Pill>}
        </div>
    );
};

export default CartWidget;