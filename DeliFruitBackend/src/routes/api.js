import express from "express"
import apiController from "../controller/apiController"
import userController from '../controller/userController'
import itemController from '../controller/itemController'
import cartController from '../controller/cartController'

const router = express.Router()

const initApiRoutes = (app) => {

    router.post('/register', apiController.handleRegister)
    router.post('/login', apiController.handleLogin)

    //user routes
    router.get('/user/read', userController.readFunc)
    router.post('/user/create', userController.createFunc)
    router.put('/user/update', userController.updateFunc)
    router.delete('/user/delete', userController.deleteFunc)

    //item routes
    router.get('/item/read', itemController.readFunc)
    router.post('/item/create', itemController.createFunc)
    router.put('/item/update', itemController.updateFunc)
    router.delete('/item/delete', itemController.deleteFunc)
    router.get('/item/get-item', itemController.getItem)
    router.get('/item/get-item-name', itemController.getItemName)
    router.get('/item/get-detail-item-by-id', itemController.getDetailItemById)

    //cart routes
    router.get('/cart/read', cartController.readFunc)
    router.post('/cart/create', cartController.createFunc)
    router.put('/cart/update', cartController.updateFunc)
    router.delete('/cart/delete', cartController.deleteFunc)

    return app.use("/api/", router)
}

export default initApiRoutes