import *  as actionTypes from './actionTypes';

export const setLoggedInUser = (loggedInUser, errorMsg) => {
    return {
        type: actionTypes.SET_LOGGEDIN_USER,
        loggedInUser: loggedInUser,
        errorMsg: errorMsg
    }
} 
