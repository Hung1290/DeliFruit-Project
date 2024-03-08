import actionTypes from "./actionTypes";
import { createNewItem, fetchAllItem, deleteItem, updateCurrentItem, fetchItemName, fetchItem, getDetailItemById } from '../../services/adminService'
import { toast } from 'react-toastify';

export const createANewItem = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewItem(data);
            if (res && res.EC === 0) {
                toast.success('Create a new item succeed!')
                dispatch(saveItemSuccess())
                dispatch(fetchAllItem())
            } else {
                dispatch(saveItemFailed());
            }
        } catch (error) {
            dispatch(saveItemFailed());
            console.log(error);
        }
    }
}

export const saveItemSuccess = () => ({
    type: actionTypes.CREATE_ITEM_SUCCESS
})

export const saveItemFailed = () => ({
    type: actionTypes.CREATE_ITEM_FAILED
})

export const fetchAllItems = (page, limit) => {
    return async (dispatch, getState) => {
        try {
            let res = await fetchAllItem(page, limit);
            if (res && res.EC === 0) {
                dispatch(fetchAllItemsSuccess(res.DT))
            } else {
                toast.error('Fetch all items error!')
                dispatch(fetchAllItemsFailed());
            }
        } catch (error) {
            toast.error('Fetch all items error!')
            dispatch(fetchAllItemsFailed());
            console.log(error);
        }
    }
}

export const fetchAllItemsSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_ITEM_SUCCESS,
    data
})

export const fetchAllItemsFailed = () => ({
    type: actionTypes.FETCH_ALL_ITEM_FAILED
})

export const deleteAItem = (itemId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteItem(itemId);
            if (res && res.EC === 0) {
                toast.success('Delete the item succeed!')
                dispatch(deleteAItemSuccess())
                dispatch(fetchAllItem())
            } else {
                toast.error('Delete the item error!')
                dispatch(deleteAItemFailed());
            }
        } catch (error) {
            toast.error('Delete the item error!')
            dispatch(deleteAItemFailed());
            console.log(error);
        }
    }
}

export const deleteAItemSuccess = () => ({
    type: actionTypes.DELETE_ITEM_SUCCESS
})

export const deleteAItemFailed = () => ({
    type: actionTypes.DELETE_ITEM_FAILED
})

export const editAItem = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await updateCurrentItem(data);
            if (res && res.EC === 0) {
                toast.success('Update the item succeed!')
                dispatch(editItemSuccess())
                dispatch(fetchAllItem())
            } else {
                toast.error('Update the item error!')
                dispatch(editItemFailed());
            }
        } catch (error) {
            toast.error('Update the item error!')
            dispatch(editItemFailed());
            console.log(error);
        }
    }
}

export const editItemSuccess = () => ({
    type: actionTypes.EDIT_ITEM_SUCCESS
})

export const editItemFailed = () => ({
    type: actionTypes.EDIT_ITEM_FAILED
})

export const fetchImportedFruit = () => {
    return async (dispatch, getState) => {
        try {
            let res = await fetchItem('FRUIT');
            if (res && res.EC === 0) {
                dispatch(fetchImportedFruitSuccess(res.DT))
            } else {
                toast.error('Fetch item error!')
                dispatch(fetchImportedFruitFailed());
            }
        } catch (error) {
            toast.error('Fetch item error!')
            dispatch(fetchImportedFruitFailed());
            console.log(error);
        }
    }
}

export const fetchImportedFruitSuccess = (data) => ({
    type: actionTypes.FETCH_IMPORTED_FRUIT_SUCCESS,
    data
})

export const fetchImportedFruitFailed = () => ({
    type: actionTypes.FETCH_IMPORTED_FRUIT_FAILED
})

export const fetchFruitBasket = () => {
    return async (dispatch, getState) => {
        try {
            let res = await fetchItem('BASKETFRUIT');
            if (res && res.EC === 0) {
                dispatch(fetchFruitBasketSuccess(res.DT))
            } else {
                toast.error('Fetch all items error!')
                dispatch(fetchFruitBasketFailed());
            }
        } catch (error) {
            toast.error('Fetch all items error!')
            dispatch(fetchFruitBasketFailed());
            console.log(error);
        }
    }
}

export const fetchFruitBasketSuccess = (data) => ({
    type: actionTypes.FETCH_FRUIT_BASKET_SUCCESS,
    data
})

export const fetchFruitBasketFailed = () => ({
    type: actionTypes.FETCH_FRUIT_BASKET_FAILED
})

export const fetchFB300 = () => {
    return async (dispatch, getState) => {
        try {
            let res = await fetchItemName('BASKETFRUIT300');
            if (res && res.EC === 0) {
                dispatch(fetchFB300Success(res.DT))
            } else {
                toast.error('Fetch all items error!')
                dispatch(fetchFB300Failed());
            }
        } catch (error) {
            toast.error('Fetch all items error!')
            dispatch(fetchFB300Failed());
            console.log(error);
        }
    }
}

export const fetchFB300Success = (data) => ({
    type: actionTypes.FETCH_FRUIT_BASKET_300_SUCCESS,
    data
})

export const fetchFB300Failed = () => ({
    type: actionTypes.FETCH_FRUIT_BASKET_300_FAILED
})

export const fetchFB400 = () => {
    return async (dispatch, getState) => {
        try {
            let res = await fetchItemName('BASKETFRUIT400');
            if (res && res.EC === 0) {
                dispatch(fetchFB400Success(res.DT))
            } else {
                toast.error('Fetch all items error!')
                dispatch(fetchFB400Failed());
            }
        } catch (error) {
            toast.error('Fetch all items error!')
            dispatch(fetchFB400Failed());
            console.log(error);
        }
    }
}

export const fetchFB400Success = (data) => ({
    type: actionTypes.FETCH_FRUIT_BASKET_400_SUCCESS,
    data
})

export const fetchFB400Failed = () => ({
    type: actionTypes.FETCH_FRUIT_BASKET_400_FAILED
})

export const fetchFB500 = () => {
    return async (dispatch, getState) => {
        try {
            let res = await fetchItemName('BASKETFRUIT500');
            if (res && res.EC === 0) {
                dispatch(fetchFB500Success(res.DT))
            } else {
                toast.error('Fetch all items error!')
                dispatch(fetchFB500Failed());
            }
        } catch (error) {
            toast.error('Fetch all items error!')
            dispatch(fetchFB500Failed());
            console.log(error);
        }
    }
}

export const fetchFB500Success = (data) => ({
    type: actionTypes.FETCH_FRUIT_BASKET_500_SUCCESS,
    data
})

export const fetchFB500Failed = () => ({
    type: actionTypes.FETCH_FRUIT_BASKET_500_FAILED
})

export const fetchFB600 = () => {
    return async (dispatch, getState) => {
        try {
            let res = await fetchItemName('BASKETFRUIT600');
            if (res && res.EC === 0) {
                dispatch(fetchFB600Success(res.DT))
            } else {
                toast.error('Fetch all items error!')
                dispatch(fetchFB600Failed());
            }
        } catch (error) {
            toast.error('Fetch all items error!')
            dispatch(fetchFB600Failed());
            console.log(error);
        }
    }
}

export const fetchFB600Success = (data) => ({
    type: actionTypes.FETCH_FRUIT_BASKET_600_SUCCESS,
    data
})

export const fetchFB600Failed = () => ({
    type: actionTypes.FETCH_FRUIT_BASKET_600_FAILED
})

export const fetchFB700 = () => {
    return async (dispatch, getState) => {
        try {
            let res = await fetchItemName('BASKETFRUIT700');
            if (res && res.EC === 0) {
                dispatch(fetchFB700Success(res.DT))
            } else {
                toast.error('Fetch all items error!')
                dispatch(fetchFB700Failed());
            }
        } catch (error) {
            toast.error('Fetch all items error!')
            dispatch(fetchFB700Failed());
            console.log(error);
        }
    }
}

export const fetchFB700Success = (data) => ({
    type: actionTypes.FETCH_FRUIT_BASKET_700_SUCCESS,
    data
})

export const fetchFB700Failed = () => ({
    type: actionTypes.FETCH_FRUIT_BASKET_700_FAILED
})

export const fetchCherry = () => {
    return async (dispatch, getState) => {
        try {
            let res = await fetchItemName('CHERRY');
            if (res && res.EC === 0) {
                dispatch(fetchCherrySuccess(res.DT))
            } else {
                toast.error('Fetch all items error!')
                dispatch(fetchCherryFailed());
            }
        } catch (error) {
            toast.error('Fetch all items error!')
            dispatch(fetchCherryFailed());
            console.log(error);
        }
    }
}

export const fetchCherrySuccess = (data) => ({
    type: actionTypes.FETCH_CHERRY_SUCCESS,
    data
})

export const fetchCherryFailed = () => ({
    type: actionTypes.FETCH_CHERRY_FAILED
})

export const fetchBlueberry = () => {
    return async (dispatch, getState) => {
        try {
            let res = await fetchItemName('BLUEBERRY');
            if (res && res.EC === 0) {
                dispatch(fetchBlueberrySuccess(res.DT))
            } else {
                toast.error('Fetch all items error!')
                dispatch(fetchBlueberryFailed());
            }
        } catch (error) {
            toast.error('Fetch all items error!')
            dispatch(fetchBlueberryFailed());
            console.log(error);
        }
    }
}

export const fetchBlueberrySuccess = (data) => ({
    type: actionTypes.FETCH_BLUEBERRY_SUCCESS,
    data
})

export const fetchBlueberryFailed = () => ({
    type: actionTypes.FETCH_BLUEBERRY_FAILED
})

export const fetchApple = () => {
    return async (dispatch, getState) => {
        try {
            let res = await fetchItemName('APPLE');
            if (res && res.EC === 0) {
                dispatch(fetchAppleSuccess(res.DT))
            } else {
                toast.error('Fetch all items error!')
                dispatch(fetchAppleFailed());
            }
        } catch (error) {
            toast.error('Fetch all items error!')
            dispatch(fetchAppleFailed());
            console.log(error);
        }
    }
}

export const fetchAppleSuccess = (data) => ({
    type: actionTypes.FETCH_APPLE_SUCCESS,
    data
})

export const fetchAppleFailed = () => ({
    type: actionTypes.FETCH_APPLE_FAILED
})

export const fetchGrape = () => {
    return async (dispatch, getState) => {
        try {
            let res = await fetchItemName('GRAPE');
            if (res && res.EC === 0) {
                dispatch(fetchGrapeSuccess(res.DT))
            } else {
                toast.error('Fetch all items error!')
                dispatch(fetchGrapeFailed());
            }
        } catch (error) {
            toast.error('Fetch all items error!')
            dispatch(fetchGrapeFailed());
            console.log(error);
        }
    }
}

export const fetchGrapeSuccess = (data) => ({
    type: actionTypes.FETCH_GRAPE_SUCCESS,
    data
})

export const fetchGrapeFailed = () => ({
    type: actionTypes.FETCH_GRAPE_FAILED
})

export const fetchKiwi = () => {
    return async (dispatch, getState) => {
        try {
            let res = await fetchItemName('KIWI');
            if (res && res.EC === 0) {
                dispatch(fetchKiwiSuccess(res.DT))
            } else {
                toast.error('Fetch all items error!')
                dispatch(fetchKiwiFailed());
            }
        } catch (error) {
            toast.error('Fetch all items error!')
            dispatch(fetchKiwiFailed());
            console.log(error);
        }
    }
}

export const fetchKiwiSuccess = (data) => ({
    type: actionTypes.FETCH_KIWI_SUCCESS,
    data
})

export const fetchKiwiFailed = () => ({
    type: actionTypes.FETCH_KIWI_FAILED
})

export const fetchOrange = () => {
    return async (dispatch, getState) => {
        try {
            let res = await fetchItemName('ORANGE');
            if (res && res.EC === 0) {
                dispatch(fetchOrangeSuccess(res.DT))
            } else {
                toast.error('Fetch all items error!')
                dispatch(fetchOrangeFailed());
            }
        } catch (error) {
            toast.error('Fetch all items error!')
            dispatch(fetchOrangeFailed());
            console.log(error);
        }
    }
}

export const fetchOrangeSuccess = (data) => ({
    type: actionTypes.FETCH_ORANGE_SUCCESS,
    data
})

export const fetchOrangeFailed = () => ({
    type: actionTypes.FETCH_ORANGE_FAILED
})

export const fetchTangerine = () => {
    return async (dispatch, getState) => {
        try {
            let res = await fetchItemName('TANGERINE');
            if (res && res.EC === 0) {
                dispatch(fetchTangerineSuccess(res.DT))
            } else {
                toast.error('Fetch all items error!')
                dispatch(fetchTangerineFailed());
            }
        } catch (error) {
            toast.error('Fetch all items error!')
            dispatch(fetchTangerineFailed());
            console.log(error);
        }
    }
}

export const fetchTangerineSuccess = (data) => ({
    type: actionTypes.FETCH_TANGERINE_SUCCESS,
    data
})

export const fetchTangerineFailed = () => ({
    type: actionTypes.FETCH_TANGERINE_FAILED
})

export const fetchDetailItemById = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await getDetailItemById(id);
            if (res && res.EC === 0) {
                dispatch(fetchDetailItemByIdSuccess(res.DT))
            } else {
                toast.error('Fetch all items error!')
                dispatch(fetchDetailItemByIdFailed());
            }
        } catch (error) {
            toast.error('Fetch all items error!')
            dispatch(fetchDetailItemByIdFailed());
            console.log(error);
        }
    }
}

export const fetchDetailItemByIdSuccess = (data) => ({
    type: actionTypes.FETCH_DETAIL_ITEM_BY_ID_SUCCESS,
    data
})

export const fetchDetailItemByIdFailed = () => ({
    type: actionTypes.FETCH_DETAIL_ITEM_BY_ID_FAILED
})

