const requestReducer = (state, action) => {
  switch (action.type) {
    case "GET_REQUESTS": {
      return {
        ...state,
        requests: action.payload,
        loading: false,
      };
    }
    case "GET_REQUEST": {
      return {
        ...state,
        request: action.payload,
        loading: false,
      };
    }

    case "GET_ORDERS": {
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    }
    case "GET_ARCHIVES": {
      return {
        ...state,
        archives: action.payload,
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

export default requestReducer;
