const data = require('../db/datos')

const userController = {
  index: function (req, res) {
    res.send('Pag principal');
  },

    registro: function (req, res) {
      res.render('register');
    },
  
    inicio: function (req, res) {
      res.render('login');
    },
    perfil: function(req, res){
      const usuario = data.usuario
      res.render('data')
    },
    productos: function(req, res){
      const usuario = data.productos
      res.render('data')
    },
    productos: function(req, res){
      const usuario = data.productos
      res.render('index')
    }
}
  
  module.exports = userController;
  