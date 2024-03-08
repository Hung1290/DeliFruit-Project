import { combineReducers } from 'redux';


import userReducer from './userReducer';
import adminReducer from './adminReducer';


const rootReducer = combineReducers({

    admin: adminReducer,
    user: userReducer

});

export default rootReducer;