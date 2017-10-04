import {combineReducers} from 'redux';
import userReducer from './reducers-users';
import activeUserReducer from './reducers-active-user';
const allReducers = combineReducers({
    users: userReducer,
    activeUser : activeUserReducer
});

export default allReducers;