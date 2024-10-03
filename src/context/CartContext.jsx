import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(currentItem => currentItem.id === item.id);

      if (existingItem) {
        // Asegurarse de no superar el stock disponible
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > item.stock) {
          console.warn(`No se puede agregar más de ${item.stock} unidades de ${item.title}`);
          return prevItems; // No actualizar el carrito si se supera el stock
        }
        
        // Si el producto ya está en el carrito, actualizar la cantidad
        return prevItems.map(currentItem =>
          currentItem.id === item.id
            ? { ...currentItem, quantity: newQuantity }
            : currentItem
        );
      } else {
        // Asegurarse de no exceder el stock al agregar un nuevo producto
        if (quantity > item.stock) {
          console.warn(`No se puede agregar más de ${item.stock} unidades de ${item.title}`);
          return prevItems; // No agregar si excede el stock
        }
        // Si es un producto nuevo, agregarlo al carrito
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalCost = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Seguimiento de cambios en cartItems
  useEffect(() => {
    console.log("Carrito actualizado: ", cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeFromCart, clearCart, totalCost, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
