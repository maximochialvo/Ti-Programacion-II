const data = require('../db/datos')


const productoController = {
    producto: function (req, res) {
      res.render('productAdd');
    },

    detalle: function (req, res) {
      const producto = data.productos[0]
      res.render('productoDetalle', {producto: producto})
      
    }


  };





module.exports = productoController;