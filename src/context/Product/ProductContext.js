import { createContext, useReducer } from "react";
import productReducer from "./ProductReducer";

const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    product: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  //get initial users (testing purpose)
  const fetchProducts = async () => {
    setLoading();
    const response = await fetch(
      `http://localhost:9000/sfac/api/produit/allProduits`
    );
  
    const data = await response.json();

    dispatch({
      type: "GET_PRODUCTS",
      payload: data.data,
    });
  };

  const getProduct = async (login) => {
    setLoading();
    const response = await fetch(
      `http://localhost:9000/sfac/api/produit/${login}`
    );
    const data = await response.json();

    dispatch({
      type: "GET_PRODUCT",
      payload: data,
    });
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        product: state.product,
        loading: state.loading,
        fetchProducts,
        getProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
