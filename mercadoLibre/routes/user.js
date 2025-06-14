const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')



router.post("/register", userController.create);

router.get('/register', userController.show);

router.get("/login", userController.login);

router.post("/processLogin", userController.processLogin);

router.get('/perfil/:id', userController.profile);

router.post("/logout", userController.logout);

module.exports = router;