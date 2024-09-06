import { useState, useEffect } from "react";

import Item from "../Item/Item";

const ItemList = ( ) => {

    let [ items, setItems ] = useState ( [] );

    useEffect ( () => {
        fetch('/src/data/items.json')
        .then(res => res.json())
        .then(data => setItems(data))

    }, []);

    return (
        <section className="items_container container">
        {items.map(item => <Item {...item} />)}
        </section>
    )
};

export default ItemList;