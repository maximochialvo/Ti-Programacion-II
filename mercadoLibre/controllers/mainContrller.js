const data = require('../db/datos')

const mainController = {
    index: function(req, res){
      const productos = data.productos
      res.render('index', {productos})
    },

    buscar: function(req, res) {
      res.render('search-results');
    },

    registro: function (req, res) {
      res.render('register');
    },
  
    login: function (req, res) {
      res.render('login');
    },
  };
  
  module.exports = mainController;
  