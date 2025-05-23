const express = require('express')
const router = express.Router()
const perfilController = require('../controllers/perfilController')


router.get('/', perfilController.index );
router.post("/register", perfilController.create);

router.get('/register', usersController.show );
router.post("/newuser", usersController.create);

router.get("/login", usersController.login);

router.post("/processLogin", usersController.processLogin)

module.exports = router;