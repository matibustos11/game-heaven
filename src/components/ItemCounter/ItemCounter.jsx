import { useState } from "react";

const ItemCounter = ({ stock, initial, onAdd}) => {

    let [quantity, setQuantity] = useState (initial);

    let increment = () => {
        if (quantity < stock) {
            setQuantity (quantity + 1);
        }
    }

    let decrement = () => {
        if (quantity > 1) {
            setQuantity (quantity - 1);
        }
    }

    return (

        <div className="counter">
            <div className="controls">
                <button className="button" onClick={decrement}>-</button>
                <h4 className="number"> {quantity} </h4>
                <button className="button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="button" onClick={()=> onAdd(quantity)} disabled= {!stock} >Agregar al Carrito</button>
            </div>
        </div>
    )
};

export default ItemCounter;