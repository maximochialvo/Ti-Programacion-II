const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainContrller")

router.get("/", mainController.in)

router.get("", mainController)

module.exports = router