const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')


router.get('/', userController.index );
router.post("/register", userController.create);

router.get('/register', userController.show);
router.post("/newuser", userController.create);

router.get("/login", userController.login);

router.post("/processLogin", userController.processLogin)

module.exports = router;