const express = require('express')
const router = express.Router()
const perfilController = require('../controllers/perfilController')


router.get('/', perfilController.index )
router.post("/register", perfilController.create);
module.exports = router;