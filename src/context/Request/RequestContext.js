import { createContext, useReducer, useContext } from "react";
import requestReducer from "./RequestReducer";
import AlertContext from "../Alerte/AlerteContext";
import axios from "axios";
const RequestContext = createContext();
export const RequestProvider = ({ children }) => {
  const initialState = {
    requests: [],
    archives: [],
    request: {},
    loading: false,
  };
  const { setAlert } = useContext(AlertContext)
  const [state, dispatch] = useReducer(requestReducer, initialState);

  const fetchRequests = async () => {
    setLoading();
    const response = await fetch(
      `http://localhost:5000/sfac/api/demande/aTraiter`
    );
    const data = await response.json();

    dispatch({
      type: "GET_REQUESTS",
      payload: data.data,
    });
  };

  
  const fetchArchives = async () => {
    setLoading();
    const response = await fetch(
      `http://localhost:5000/sfac/api/demande/archive`
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
      `http://localhost:5000/sfac/api/demande/${login}`
    );
    const data = await response.json();

    dispatch({
      type: "GET_REQUEST",
      payload: data.data,
    });
  };
  const deleteRequest = (id) => {
    if (window.confirm('Êtes vous sur de vouloir supprimer cette demande ?')) {
      axios.delete(`
     http://localhost:5000/sfac/api/demande/${id}`)
     setTimeout(() => window.location.reload(), 1000)
     setAlert('La demande est supprimée')
    }
   
  }


  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <RequestContext.Provider
      value={{
        requests: state.requests,
        request: state.request,
        archives: state.archives,
        loading: state.loading,
        fetchRequests,
        getRequest,
        fetchArchives,
        deleteRequest,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export default RequestContext;
