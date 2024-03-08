import actionTypes from './actionTypes';
import { registerNewUser, loginUser, createNewItemCart, fetchAllItemCart, deleteItemCart, updateCurrentItemCart } from '../../services/userService'
import { toast } from 'react-toastify';

export const userLogin = (valueLogin, password) => {
    return async (dispatch, getState) => {
        try {
            let res = await loginUser(valueLogin, password);
            if (res && +res.EC === 0) {
                dispatch(userLoginSuccess(res.DT))
            } else {
                dispatch(userLoginFail());
                toast.error(res.EM)
            }
        } catch (error) {
            dispatch(saveUserFailed());
            console.log(error);
        }
    }
}

export const userLoginSuccess = (userInfor) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    userInfor
})

export const userLoginFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL
})

export const createNewUser = (username, address, phone, password) => {
    return async (dispatch, getState) => {
        try {
            let res = await registerNewUser(username, address, phone, password);
            if (res && +res.EC === 0) {
                toast.success(res.EM)
                dispatch(saveUserSuccess())
            } else {
                dispatch(saveUserFailed());
                toast.error(res.EM)
            }
        } catch (error) {
            dispatch(saveUserFailed());
            console.log(error);
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

export const userLogout = () => ({
    type: actionTypes.USER_LOGOUT
})

export const addToCart = (data, id, quantity) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewItemCart(data, id, quantity);
            if (res && res.EC === 0) {
                dispatch(addToCartSuccess())
                dispatch(fetchCart(id))
            } else {
                dispatch(addToCartFailed());
            }
        } catch (error) {
            dispatch(addToCartFailed());
            console.log(error);
        }
    }
}

export const addToCartSuccess = () => ({
    type: actionTypes.ADD_TO_CART_SUCCESS
})

export const addToCartFailed = () => ({
    type: actionTypes.ADD_TO_CART_FAILED
})

export const fetchCart = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await fetchAllItemCart(id);
            if (res && res.EC === 0) {
                dispatch(fetchCartSuccess(res.DT))
            } else {
                toast.error('Fetch all items error!')
                dispatch(fetchCartFailed());
            }
        } catch (error) {
            toast.error('Fetch all items error!')
            dispatch(fetchCartFailed());
            console.log(error);
        }
    }
}

export const fetchCartSuccess = (data) => ({
    type: actionTypes.FETCH_CART_SUCCESS,
    data
})

export const fetchCartFailed = () => ({
    type: actionTypes.FETCH_CART_FAILED
})

export const deleteCart = (itemId, id) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteItemCart(itemId);
            if (res && res.EC === 0) {
                dispatch(deleteCartSuccess())
                dispatch(fetchCart(id))
            } else {
                dispatch(deleteCartFailed());
            }
        } catch (error) {
            dispatch(deleteCartFailed());
            console.log(error);
        }
    }
}

export const deleteCartSuccess = () => ({
    type: actionTypes.DELETE_CART_SUCCESS
})

export const deleteCartFailed = () => ({
    type: actionTypes.DELETE_CART_FAILED
})

export const editCart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await updateCurrentItemCart(data);
            if (res && res.EC === 0) {
                toast.success('Update the item succeed!')
                dispatch(editCartSuccess())
            } else {
                toast.error('Update the item error!')
                dispatch(editCartFailed());
            }
        } catch (error) {
            toast.error('Update the item error!')
            dispatch(editCartFailed());
            console.log(error);
        }
    }
}

export const editCartSuccess = () => ({
    type: actionTypes.EDIT_CART_SUCCESS
})

export const editCartFailed = () => ({
    type: actionTypes.EDIT_CART_FAILED
})