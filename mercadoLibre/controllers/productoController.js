const data = require('../db/datos')


const productoController = {
    detalle: function (req, res) {
      const producto = data.productos[0]
      res.render('product', {producto: producto})
    },
    add: function (req, res) {
      res.render('productAdd')
  } 
  };





module.exports = productoController;