import { createContext, useReducer } from "react";
import orderReducer from "./OrderReducer";

const OrderContext = createContext();
export const OrderProvider = ({ children }) => {
  const initialState = {
    orders: [],
    fournisseurs: [],
    encours: [],
    recue: [],
    order: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(orderReducer, initialState);
  

  const fetchOrdersFournisseur = async () => {
    setLoading();
    const response = await fetch(
      `http://localhost:5000/sfac/api/commande/fournisseur`
    );
    const data = await response.json();

    dispatch({
      type: "GET_ORDERS_FOURNISSEUR",
      payload: data.data,
    });
  };

  

 
  const getAllCommandes = async () => {
    setLoading();
    const response = await fetch(
      `http://localhost:5000/sfac/api/commande/AllCommandes`
    );
    const data = await response.json();

    dispatch({
      type: "GET_ORDERS",
      payload: data.data,
    });
  };
  const fetchOrdersEnCours = async () => {
    setLoading();
    const response = await fetch(
      `http://localhost:5000/sfac/api/commande/enCours`
    );
    const data = await response.json();

    dispatch({
      type: "GET_ORDERS_ENCOURS",
      payload: data.data,
    });
  };
  const fetchOrdersRecue = async () => {
    setLoading();
    const response = await fetch(
      `http://localhost:5000/sfac/api/commande/recue`
    );
    const data = await response.json();

    dispatch({
      type: "GET_ORDERS_RECUE",
      payload: data.data,
    });
  };


  const getOrder = async (login) => {
    setLoading();
    const response = await fetch(
      `http://localhost:5000/sfac/api/commande/${login}`
    );
    const data = await response.json();

    dispatch({
      type: "GET_ORDER",
      payload: data.data,
    });
  };
  const deleteRequest = (e) => {
    if (window.confirm("Êtes vous sur de vouloir supprimer cette demande ?")) {
      console.log("to do SUPPRIMER L'item");
    }
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <OrderContext.Provider
      value={{
        orders: state.orders,
    fournisseurs: state.fournisseurs,
    encours: state.encours,
    recue: state.recue,
    
    order: state.order,
       fetchOrdersEnCours,
       fetchOrdersRecue,
       fetchOrdersFournisseur,
       getOrder,
       getAllCommandes,
   
        deleteRequest,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
