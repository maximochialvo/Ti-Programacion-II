const db = require('../database/models')
const op = db.Sequelize.Op;
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
      const resultados = data.productos;


      data.Producto.findAll({
        where: [{nombre: {[op.like]: '%' + busqueda + '%'}}]
      })  .then(function(resultados){
        console.log(resultados)
        return res.render("search-results", {producto: resultados})
    })
     .catch(function(error){
        return res.send(error);
    })      

    }
  };





module.exports = productoController;