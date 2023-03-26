import { useReducer, useContext, createContext } from "react";
import { INITIAL_PRODUCT_STATE } from "../constants/constants";
import { ProductReducer } from "../reducers";
const ProductContext = createContext(INITIAL_PRODUCT_STATE);
export const ProductProvider = ({ children }) => {
  const [product, dispatch] = useReducer(ProductReducer, INITIAL_PRODUCT_STATE);
  return (
    <ProductContext.Provider value={{ product, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProduct = () => useContext(ProductContext);
