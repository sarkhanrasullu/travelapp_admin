import { combineReducers } from 'redux'
import loading from './loading';
import entities from './entities';

export default combineReducers({
    loading,
    entities
})