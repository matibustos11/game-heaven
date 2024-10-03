import Swal from 'sweetalert2';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.config';

const handlePayment = async () => {
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
        },
        customClass: {
            title: 'swal2-title',
            html: 'swal2-text',
            input: 'swal2-input',
            confirmButton: 'swal2-confirm',
            cancelButton: 'swal2-cancel',
        },
    });

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
            const docRef = await addDoc(collection(db, 'orders'), orderData);
            Swal.fire('¡Compra confirmada!', `Tu compra ha sido procesada exitosamente. Número de orden: ${docRef.id}`, 'success');
            clearCart();
        } catch (error) {
            console.error('Error al agregar documento: ', error);
            Swal.fire('Error', 'Hubo un problema al procesar tu compra.', 'error');
        }
    }
};
