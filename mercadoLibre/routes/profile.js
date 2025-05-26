const express = require('express')
const router = express.Router()
const perfilController = require('../controllers/perfilController')


router.get('/', perfilController.index );
router.post("/register", perfilController.create);

router.get('/register', perfilController.show);
router.post("/newuser", perfilController.create);

router.get("/login", perfilController.login);

router.post("/processLogin", perfilController.processLogin)

module.exports = router;