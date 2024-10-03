import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import { useState, useEffect } from "react";
import Item from "../Item/Item";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection)
      .then((snapshot) => {
        const itemsArray = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        setItems(itemsArray);
      })
      .catch((error) => {
        console.error("Error fetching items: ", error);
      })
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <section className="items_container container">
      {items.map((item, i) => (
        <Item key={`item-${i}`} {...item} />
      ))}
    </section>
  );
};

export default ItemList;
