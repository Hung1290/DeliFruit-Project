import actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    isAuthenticated: false,
    userInfor: null,
    cart: []
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                userInfor: action.userInfor
            }
        case actionTypes.USER_LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                userInfor: null
            }
        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                userInfor: null,
                cart: []
            }
        case actionTypes.FETCH_CART_SUCCESS:
            return {
                ...state,
                cart: action.data
            }

        default: return state;

    }

};

export default userReducer;