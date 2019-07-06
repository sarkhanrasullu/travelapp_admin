import *  as actionTypes from './actionTypes';
import commonAxios from '../../services/CommonAxios'

export const setList = (list,page, errorMsg) => {
    return {
        type: actionTypes.SET_LIST,
        list: list,
        page: page,
        errorMsg: errorMsg
    }
} 

export const setSelectedEntity= (selectedEntity,errorMsg) => {
    return {
        type: actionTypes.SET_SELECTED_ENTITY,
        selectedEntity: selectedEntity,
        errorMsg: errorMsg
    }
} 

export const loadItems = (url) => {
    return dispatch=> {
        commonAxios 
        .get(url)
        .then(res => {
            const firstElementKey = Object.keys(res.data._embedded)[0];
            dispatch(setList(res.data._embedded[firstElementKey],res.data.page));    
        })
        .catch(err => {
            //dispatch(setCarts(null, err.response.data.message));
      })
    }
}

export const loadItem = (url) => {
    return dispatch=> {
        commonAxios 
        .get(url)
        .then(res => {
            dispatch(setSelectedEntity(res.data));
        })
        .catch(err => {
            //dispatch(setCarts(null, err.response.data.message));
      })
    }
}