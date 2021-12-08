import { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";
const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    Axios.get("/api/products/all-products").then((response) => {
        setProducts(response.data);
      });
  }, []);

  const value = {
    products,
    setProducts,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
