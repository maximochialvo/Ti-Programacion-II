const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainContrller")

router.get("/", mainController.lupa)

router.get("/buscar", mainController.buscar)

module.exports = router



