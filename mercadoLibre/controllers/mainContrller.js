const data = require('../db/datos')
const db = require('../database/models');
const { Association } = require('sequelize');
const op = db.Sequelize.Op;

const mainController = {
    index: function(req, res){
      //const productos = data.productos
      //res.render('index', {productos})
      db.Producto.findAll(
        {
          include: {association: "usuario"}
        }
      )
      .then(function(resultados){
        res.render('index', {productos: resultados})
      })
    },

    buscar: function(req, res) {
      res.render('search-results', {productos : data.productos});
    },

    registro: function (req, res) {
      res.render('register');
    },
  
    login: function (req, res) {
      res.render('login');
    },
  };
  
  module.exports = mainController;
  