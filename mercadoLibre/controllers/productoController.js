const data = require('../db/datos')


const productoController = {
    detalle: function (req, res) {
      const producto = data.productos[0]
      res.render('product', {producto: producto})
    }
  };





module.exports = productoController;