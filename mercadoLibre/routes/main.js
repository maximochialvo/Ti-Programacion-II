const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainContrller")

router.get("/", mainController.index)

router.get("", mainController)

module.exports = router