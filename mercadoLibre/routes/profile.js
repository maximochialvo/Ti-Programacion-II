const express = require('express')
const router = express.Router()
const perfilController = require('../controllers/perfilController')


router.get('/', perfilController.index );
router.post("/register", perfilController.create);

<<<<<<< HEAD
//router.get('/register', usersController.show );
//router.post("/newuser", usersController.create);

//router.get("/login", usersController.login);

//router.post("/processLogin", usersController.processLogin)
=======
router.get('/register', perfilController.show);
router.post("/newuser", perfilController.create);

router.get("/login", perfilController.login);

router.post("/processLogin", perfilController.processLogin)
>>>>>>> 78b1bdc0dfe37ab8fdcd5ff8039ed976b26ba139

module.exports = router;