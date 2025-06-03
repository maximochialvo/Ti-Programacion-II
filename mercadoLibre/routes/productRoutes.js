const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.get('/detalle/:id', productoController.detalle);

router.post('/add', productoController.agregarProducto)
router.get('/add', productoController.nuevoP)
//router.get('/search', productoController.search);

router.get("/search", productoController.buscar)
router.get("/:id", productoController.detail)
router.post('/:id/comentario', productoController.comentario);


module.exports = router;
