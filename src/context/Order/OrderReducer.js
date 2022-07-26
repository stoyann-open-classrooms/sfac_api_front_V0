const requestReducer = (state, action) => {
  switch (action.type) {
    case "GET_ORDERS_FOURNISSEUR": {
      return {
        ...state,
        fournisseurs: action.payload,
        loading: false,
      };
    }
    case "GET_ORDERS_ENCOURS": {
      return {
        ...state,
        encours: action.payload,
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
    case "GET_ORDERS_RECUE": {
      return {
        ...state,
        recue: action.payload,
        loading: false,
      };
    }
    case "GET_ORDER": {
      return {
        ...state,
        order: action.payload,
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
