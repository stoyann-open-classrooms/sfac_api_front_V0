const UtilsReducer = (state, action) => {
    switch (action.type) {
        case "GET_DAYS_BETWEEN_ORDER": {
            return {
              ...state,
              nbDeJoursEntreCommandes: action.payload,
             
            };
          }
      default:
        return state;
    }
  };
  
  export default UtilsReducer;
  