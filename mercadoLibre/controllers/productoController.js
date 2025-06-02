const db = require('../database/models')
const op = db.Sequelize.Op;
const data = require('../db/datos')

const productoController = {
    detalle: function (req, res) {
      //const producto = data.productos[0]
      //res.render('product', {producto: producto})
      
      const id = req.params.id
      db.Producto.findByPk(id)
        .then(function(response){
          console.log(response)
          res.render('product', {producto: response})
        })
        .catch(function(error){
          return res.send(error)
        })
      },
    
    add: function (req, res) {
      res.render('productAdd')
    }, 

    buscar: function (req, res){
      const busqueda = req.query.search;
      console.log('Busqueda' , busqueda)
      db.Producto.findAll({
        where: 
          {nombre_producto: {[op.like]: `%${busqueda}%`}},
          include: [{association: "usuario"}]
      })
        .then(function(resultados){
          return res.render("search-results", {producto: resultados})
      })
      .catch(function(error){
          return res.send(error);
      })      

    },

    detail: function (req, res){
      db.Producto.findByPk(req.params.id)
    .then(function(producto){
      if (!producto) {
        return res.send("Producto no encontrado");
      }else{
      res.render("detalle", { producto });

      }

    })
    .catch(function(error){
          return res.send(error);
    });
    }
  };

module.exports = productoController;