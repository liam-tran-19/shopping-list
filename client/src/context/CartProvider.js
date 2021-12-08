import { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";
const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
  }, []);

  const value = {
    cartItems,
    setCartItems,
  };
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
