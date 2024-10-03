import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2';
import { db } from '../../config/firebase.config'; // Asegúrate de importar la configuración de Firebase
import { collection, addDoc } from 'firebase/firestore';

const CartView = () => {
  const { cartItems, removeFromCart, clearCart, totalCost } = useContext(CartContext);

  const handlePayment = async () => {
    // Obtener datos del cliente a través de un formulario de SweetAlert
    const { value: formValues } = await Swal.fire({
      title: 'Ingresa tus datos',
      html:
        '<input id="name" class="swal2-input" placeholder="Nombre">' +
        '<input id="email" class="swal2-input" placeholder="Email">' +
        '<input id="address" class="swal2-input" placeholder="Dirección">',
      focusConfirm: false,
      preConfirm: () => {
        return {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          address: document.getElementById('address').value,
        };
      }
    });

    // Si el usuario completó el formulario
    if (formValues) {
      const orderData = {
        customer: {
          name: formValues.name,
          email: formValues.email,
          address: formValues.address,
        },
        items: cartItems.map(item => ({
          id: item.id,
          title: item.title,
          quantity: item.quantity,
          price: item.price,
        })),
        total: totalCost(),
        status: 'pending',
        createdAt: new Date(),
      };

      try {
        // Guardar la orden en Firestore y obtener el ID del documento
        const docRef = await addDoc(collection(db, 'orders'), orderData);
        const orderId = docRef.id; // Obtener el ID de la orden

        // Mostrar el mensaje de confirmación con el número de orden
        Swal.fire('¡Compra confirmada!', `Tu compra ha sido procesada exitosamente. Número de orden: ${orderId}`, 'success');
        clearCart(); // Vacía el carrito tras confirmar la compra
      } catch (error) {
        console.error('Error al agregar documento: ', error);
        Swal.fire('Error', 'Hubo un problema al procesar tu compra.', 'error');
      }
    }
  };

  if (!cartItems) {
    return <p>Cargando tu carrito...</p>; // Mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className="cart-view">
      <h2>Tu Carrito</h2>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={`../src/assets${item.img.front}`} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>Precio: ${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: ${totalCost()}</h3>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <button onClick={handlePayment}>Pagar</button>
          </div>
        </>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default CartView;
