import { Icon } from '@iconify/react';
import Pill from '../Pill/Pill';

const CartWidget = ({ quantity }) => {

    return (
        <div className='cart-widget'>
            <Pill quantity={3} />
            <Icon className='cart-widget-icon' icon="ic:sharp-shopping-cart" />
        </div>
    );
};

export default CartWidget;