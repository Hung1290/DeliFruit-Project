import axios from "../setup/axios";

const registerNewUser = (username, address, phone, password) => {
    return axios.post("/register", {
        username, address, phone, password
    })
}

const loginUser = (valueLogin, password) => {
    return axios.post("/login", {
        valueLogin, password
    })
}

const fetchAllItemCart = (id) => {
    return axios.get(`/cart/read?id=${id}`)
}

const deleteItemCart = (item) => {
    return axios.delete("/cart/delete", {
        data: { id: item.id }
    })
}

const createNewItemCart = (itemData, id, quantity) => {
    return axios.post("/cart/create", {
        ...itemData, id, quantity
    })
}

const updateCurrentItemCart = (itemData) => {
    return axios.put("/cart/update", {
        ...itemData
    })
}

export { registerNewUser, loginUser, fetchAllItemCart, deleteItemCart, createNewItemCart, updateCurrentItemCart }