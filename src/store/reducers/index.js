import { combineReducers } from 'redux'
import entity from './entity';
import loading from './loading';
import auth from './auth';

export default combineReducers({
    entity,
    loading,
    auth
})