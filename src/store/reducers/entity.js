import * as actionTypes from '../actions/actionTypes';
    
const initialState = {
    list: [],
    selectedEntity:{},
    errorMsg: '',
    page: {},
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_LIST:
            return {
                ...state,
                list: action.list,
                page: action.page,
                errorMsg: action.errorMsg
            }
            case actionTypes.SET_SELECTED_ENTITY:
                return {
                    ...state,
                    selectedEntity: action.selectedEntity,
                    errorMsg: action.errorMsg
                }
        default:
            return state;
    }
};

export default reducer;