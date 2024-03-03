import { createContext, useState } from "react";

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cartList.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartList];
      updatedCart[existingItemIndex].quantity += item.quantity;
      setCartList(updatedCart);
    } else {
      setCartList([...cartList, item]);
    }
  };

  const removeList = () => {
    setCartList([]);
  };

  const deleteItem = ({ id }) => {
    const updatedCart = cartList.filter((item) => item.id !== id);
    setCartList(updatedCart);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartList.map((item) => {
      if (item.id === id) {
        const updatedQuantity = Math.min(newQuantity, item.stock);
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });
    setCartList(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeList,
        deleteItem,
        handleQuantityChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
