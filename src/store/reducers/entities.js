import * as actionTypes from "../actions/actionTypes";

const initialState = {
  brands: [],
  models: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BRANDS:
      return {
        ...state,
        brands: action.brands
      };
    case actionTypes.SET_MODELS:
      return {
        ...state,
        models: action.models
      };
    default:
      return state;
  }
};

export default reducer;
