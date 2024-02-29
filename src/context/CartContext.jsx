import { createContext, useState } from "react";

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (items) => {
    setCartList([...cartList, { ...items }]);
  };

  const removeList = () => {
    setCartList([]);
    // implementarlo en algún lado
  };

  const deleteItem = ({ id }) => {
    const updatedCart = cartList.filter((item) => item.id !== id);
    setCartList(updatedCart);
    //implementarlo en algún lado
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeList, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
