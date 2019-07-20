import *  as actionTypes from './actionTypes';

export const setBrands = (brands) => {
    return {
        type: actionTypes.SET_BRANDS,
        brands: [...[{id:null, name:"select"}],...brands]
    }
} 

export const setModels = (models) => {
    return {
        type: actionTypes.SET_MODELS,
        models: [...[{id:null, name:"select"}],...models]
    }
} 
