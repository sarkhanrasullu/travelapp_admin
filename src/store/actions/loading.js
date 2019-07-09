import *  as actionTypes from './actionTypes';

export const setLoading = (isLoading, errorMsg, successMsg) => {
    return {
        type: actionTypes.SET_LOADING,
        isLoading: isLoading,
        errorMsg: errorMsg,
        successMsg: successMsg,
    }
} 
