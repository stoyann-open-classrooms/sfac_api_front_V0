import { createContext, useReducer } from "react";
import kanbanReducer from "./KanbanReducer";

const KanbanContext = createContext();
export const KanbanProvider = ({ children }) => {
  const initialState = {
    kanbans: [],
    kanban: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(kanbanReducer, initialState);

  //get initial users (testing purpose)
  const fetchKanbans = async () => {
    setLoading();
    const response = await fetch(
      `http://localhost:9000/sfac/api/kanban/allKanbans`
    );
    const data = await response.json();

    dispatch({
      type: "GET_KANBANS",
      payload: data.data,
    });
  };

  const getKanban = async (login) => {
    setLoading();
    const response = await fetch(
      `http://localhost:9000/sfac/api/kanban/${login}`
    );
    const data = await response.json();

    dispatch({
      type: "GET_KANBAN",
      payload: data,
    });
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <KanbanContext.Provider
      value={{
        kanbans: state.kanbans,
        kanban: state.kanban,
        loading: state.loading,
        fetchKanbans,
        getKanban,
      }}
    >
      {children}
    </KanbanContext.Provider>
  );
};

export default KanbanContext;
