import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.config';
import ItemCounter from "../ItemCounter/ItemCounter";

const ItemDetail = () => {
    const { addItem } = useContext(CartContext);
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1); // Cambiado para manejar la cantidad

    useEffect(() => {
        const getItemDetail = async () => {
            const itemDoc = doc(db, "items", id);
            const docSnap = await getDoc(itemDoc);

            if (docSnap.exists()) {
                setItem({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log("No se encontró el documento!");
            }
            setLoading(false);
        };

        getItemDetail();
    }, [id]);

    const handleAdd = () => {
        if (item && quantity > 0) { // Asegúrate de que quantity sea mayor que 0
            addItem(item, quantity);
        }
    };

    if (loading) {
        return <p>Cargando detalles del producto...</p>;
    }

    if (!item) {
        return <p>No se encontró el producto.</p>;
    }

    return (
        <section className="item-detail">
            <picture className="item-detail_picture">
                <img className="item-detail_picture-img item_picture-img-1" src={`../src/assets${item.img?.front}`} alt={`${item.title} - Frente Caja`} />
                <img className="item-detail_picture-img item_picture-img-2" src={`../src/assets${item.img?.back}`} alt={`${item.title} - Dorso Caja`} />
            </picture>

            <article className="item-detail_info">
                <h3 className="item-detail_info-title">{item.category}</h3>
                <h4 className="item-detail_info-item">{item.title}</h4>
                <p className="item-detail_info-description">{item.description}</p>
                <p className="item-detail_info-price"> $ {item.price} .- </p>
            </article>

            <div>
                <ItemCounter initial={1} stock={item.stock} setQuantity={setQuantity} /> {/* Cambiado aquí */}
                <button className="button" onClick={handleAdd} disabled={item.stock <= 0}>
                    Agregar al Carrito
                </button>
            </div>

            <Link to="/tienda" className="btn button-back-to-store">
                Seguir Comprando
            </Link>
        </section>
    );
};

export default ItemDetail;
