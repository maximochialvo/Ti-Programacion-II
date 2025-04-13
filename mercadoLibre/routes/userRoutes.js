const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.index)
router.get('/registro', userController.registro)
router.get('/login', userController.inicio)






module.exports = router;