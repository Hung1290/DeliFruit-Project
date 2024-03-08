import express from "express"
import homeController from "../controller/homeController"

const router = express.Router()

const initWebRoutes = (app) => {
    router.get("/", homeController.handleHelloWord)
    router.get("/user", homeController.handleUser)
    router.post("/user/create-user", homeController.handleCreateNewUser)
    router.post("/user/update-user", homeController.handleUpdateUser)
    router.get("/update-user/:id", homeController.getUpdateUser)
    router.post("/delete-user/:id", homeController.handleDeleteUser)

    return app.use("/", router)
}

export default initWebRoutes