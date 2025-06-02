const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.get('/detalle/:id', productoController.detalle);

router.get('/add', productoController.add)
//router.get('/search', productoController.search);

router.get("/search", productoController.buscar)
router.get("/:id", productoController.detail)

module.exports = router;
