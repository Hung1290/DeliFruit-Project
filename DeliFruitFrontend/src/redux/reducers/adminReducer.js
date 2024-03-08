import actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    items: [],
    fruitBasket: [],
    importedFruit: [],
    detailItem: []
};

const adminReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case actionTypes.FETCH_ALL_ITEM_SUCCESS:
            return {
                ...state,
                items: action.data
            }
        case actionTypes.FETCH_ALL_ITEM_FAILED:
            return {
                ...state,
                items: []
            }
        case actionTypes.FETCH_IMPORTED_FRUIT_SUCCESS:
            return {
                ...state,
                importedFruit: action.data
            }
        case actionTypes.FETCH_IMPORTED_FRUIT_FAILED:
            return {
                ...state,
                importedFruit: []
            }
        case actionTypes.FETCH_FRUIT_BASKET_SUCCESS:
            return {
                ...state,
                fruitBasket: action.data
            }
        case actionTypes.FETCH_FRUIT_BASKET_FAILED:
            return {
                ...state,
                fruitBasket: []
            }
        case actionTypes.FETCH_FRUIT_BASKET_300_SUCCESS:
            return {
                ...state,
                fruitBasket: action.data
            }
        case actionTypes.FETCH_FRUIT_BASKET_300_FAILED:
            return {
                ...state,
                fruitBasket: []
            }
        case actionTypes.FETCH_FRUIT_BASKET_400_SUCCESS:
            return {
                ...state,
                fruitBasket: action.data
            }
        case actionTypes.FETCH_FRUIT_BASKET_400_FAILED:
            return {
                ...state,
                fruitBasket: []
            }
        case actionTypes.FETCH_FRUIT_BASKET_500_SUCCESS:
            return {
                ...state,
                fruitBasket: action.data
            }
        case actionTypes.FETCH_FRUIT_BASKET_500_FAILED:
            return {
                ...state,
                fruitBasket: []
            }
        case actionTypes.FETCH_FRUIT_BASKET_600_SUCCESS:
            return {
                ...state,
                fruitBasket: action.data
            }
        case actionTypes.FETCH_FRUIT_BASKET_600_FAILED:
            return {
                ...state,
                fruitBasket: []
            }
        case actionTypes.FETCH_FRUIT_BASKET_700_SUCCESS:
            return {
                ...state,
                fruitBasket: action.data
            }
        case actionTypes.FETCH_FRUIT_BASKET_700_FAILED:
            return {
                ...state,
                fruitBasket: []
            }
        case actionTypes.FETCH_CHERRY_SUCCESS:
            return {
                ...state,
                importedFruit: action.data
            }
        case actionTypes.FETCH_CHERRY_FAILED:
            return {
                ...state,
                importedFruit: []
            }
        case actionTypes.FETCH_BLUEBERRY_SUCCESS:
            return {
                ...state,
                importedFruit: action.data
            }
        case actionTypes.FETCH_BLUEBERRY_FAILED:
            return {
                ...state,
                importedFruit: []
            }
        case actionTypes.FETCH_APPLE_SUCCESS:
            return {
                ...state,
                importedFruit: action.data
            }
        case actionTypes.FETCH_APPLE_FAILED:
            return {
                ...state,
                importedFruit: []
            }
        case actionTypes.FETCH_GRAPE_SUCCESS:
            return {
                ...state,
                importedFruit: action.data
            }
        case actionTypes.FETCH_GRAPE_FAILED:
            return {
                ...state,
                importedFruit: []
            }
        case actionTypes.FETCH_KIWI_SUCCESS:
            return {
                ...state,
                importedFruit: action.data
            }
        case actionTypes.FETCH_KIWI_FAILED:
            return {
                ...state,
                importedFruit: []
            }
        case actionTypes.FETCH_ORANGE_SUCCESS:
            return {
                ...state,
                importedFruit: action.data
            }
        case actionTypes.FETCH_ORANGE_FAILED:
            return {
                ...state,
                importedFruit: []
            }
        case actionTypes.FETCH_TANGERINE_SUCCESS:
            return {
                ...state,
                importedFruit: action.data
            }
        case actionTypes.FETCH_TANGERINE_FAILED:
            return {
                ...state,
                importedFruit: []
            }
        case actionTypes.FETCH_DETAIL_ITEM_BY_ID_SUCCESS:
            return {
                ...state,
                detailItem: action.data
            }
        case actionTypes.FETCH_DETAIL_ITEM_BY_ID_FAILED:
            return {
                ...state,
                detailItem: []
            }


        default: return state;

    }

};

export default adminReducer;