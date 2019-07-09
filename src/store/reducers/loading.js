import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: [],
  errorMessage: null,
  successMessage: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorMessage: action.errorMessage,
        successMessage: action.successMessage,
      };
    default:
      return state;
  }
};

export default reducer;
