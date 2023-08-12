const { Router } = require("express")

const UsersController = require("../controller/UsersController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRoutes = Router()

const userController = new UsersController()

usersRoutes.post("/", userController.create)
usersRoutes.put("/", ensureAuthenticated, userController.update)

module.exports = usersRoutes  