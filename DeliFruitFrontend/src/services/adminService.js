import axios from "../setup/axios";

const fetchAllItem = (page, limit) => {
    return axios.get(`/item/read?page=${page}&limit=${limit}`)
}

const deleteItem = (item) => {
    return axios.delete("/item/delete", {
        data: { id: item.id }
    })
}

const createNewItem = (itemData) => {
    return axios.post("/item/create", {
        ...itemData
    })
}

const updateCurrentItem = (itemData) => {
    return axios.put("/item/update", {
        ...itemData
    })
}

const fetchItem = (item) => {
    return axios.get(`/item/get-item?type=${item}`)
}

const fetchItemName = (name) => {
    return axios.get(`/item/get-item-name?type=${name}`)
}

const getDetailItemById = (id) => {
    return axios.get(`/item/get-detail-item-by-id?id=${id}`)
}

export { fetchAllItem, deleteItem, createNewItem, updateCurrentItem, fetchItem, fetchItemName, getDetailItemById }
