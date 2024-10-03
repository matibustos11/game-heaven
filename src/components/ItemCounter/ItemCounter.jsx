import { useState, useEffect } from "react";

const ItemCounter = ({ stock, initial, setQuantity }) => {
    const [localQuantity, setLocalQuantity] = useState(initial);

    useEffect(() => {
        setQuantity(localQuantity); // Actualiza la cantidad en el padre cada vez que cambie localQuantity
    }, [localQuantity, setQuantity]);

    const increment = () => {
        if (localQuantity < stock) {
            setLocalQuantity(localQuantity + 1);
        }
    };

    const decrement = () => {
        if (localQuantity > 1) {
            setLocalQuantity(localQuantity - 1);
        }
    };

    return (
        <div className="counter">
            <div className="controls">
                <button className="button" onClick={decrement}>-</button>
                <h4 className="number"> {localQuantity} </h4>
                <button className="button" onClick={increment}>+</button>
            </div>
        </div>
    );
};

export default ItemCounter;
