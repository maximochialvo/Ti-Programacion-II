const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainContrller")

router.get("/", mainController.index)
router.get("/buscar", mainController.buscar)
router.get('/registro', mainController.registro)
router.get('/login', mainController.login)

module.exports = router



//router.get('/product-add', indexController.productA);

//router.post('/product-add', indexController.agregarP);

//router.get('/productos/:id', indexController.productD); 

//router.post('/productos/:id', indexController.addComment)
