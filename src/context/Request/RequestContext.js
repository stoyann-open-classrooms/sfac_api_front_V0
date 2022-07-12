import { createContext, useReducer } from "react";
import requestReducer from "./RequestReducer";

const RequestContext = createContext();
export const RequestProvider = ({ children }) => {
  const initialState = {
    requests: [],
    orders: [],
    archives: [],
    request: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(requestReducer, initialState);

  const fetchRequests = async () => {
    setLoading();
    const response = await fetch(
      `http://localhost:9000/sfac/api/demande/aTraiter`
    );
    const data = await response.json();

    dispatch({
      type: "GET_REQUESTS",
      payload: data.data,
    });
  };

  const fetchOrders = async () => {
    setLoading();
    const response = await fetch(
      `http://localhost:9000/sfac/api/demande/enCours`
    );
    const data = await response.json();

    dispatch({
      type: "GET_ORDERS",
      payload: data.data,
    });
  };
  const fetchArchives = async () => {
    setLoading();
    const response = await fetch(
      `http://localhost:9000/sfac/api/demande/recue`
    );
    const data = await response.json();

    dispatch({
      type: "GET_ARCHIVES",
      payload: data.data,
    });
  };

  const getRequest = async (login) => {
    setLoading();
    const response = await fetch(
      `http://localhost:9000/sfac/api/demande/${login}`
    );
    const data = await response.json();

    dispatch({
      type: "GET_REQUEST",
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
    <RequestContext.Provider
      value={{
        requests: state.requests,
        request: state.request,
        archives: state.archives,
        orders: state.orders,
        loading: state.loading,
        fetchRequests,
        getRequest,
        fetchArchives,
        fetchOrders,
        deleteRequest,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export default RequestContext;
