const kanbanReducer = (state, action) => {
  switch (action.type) {
    case "GET_KANBANS": {
      return {
        ...state,
        kanbans: action.payload,
        loading: false,
      };
    }
    case "GET_KANBAN": {
      return {
        ...state,
        kanban: action.payload,
        loading: false,
      };
    }
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default kanbanReducer;
