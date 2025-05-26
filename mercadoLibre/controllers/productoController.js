const data = require('../db/datos')


const productoController = {
    detalle: function (req, res) {
      const producto = data.productos[0]
      res.render('product', {producto: producto})
    },
    add: function (req, res) {
      res.render('productAdd')
  }, 

    buscar: function (req, res) {
      const busqueda = req.query.search;
      const resultados = data.productos
      
    }
  };





module.exports = productoController;