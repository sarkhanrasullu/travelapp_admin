import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loggedInUser: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOGGEDIN_USER:
      return {
        ...state,
        loggedInUser: action.loggedInUser
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        loggedInUser: initialState.loggedInUser
      };
    default:
      return state;
  }
};

export default reducer;
