const data = require('../db/datos')

const userController = {
    registro: function (req, res) {
      res.render('register');
    },
  
    inicio: function (req, res) {
      res.render('login');
    },
    perfil: function(req, res){
      const usuario = data.usuario
      res.render('data')
  }
}
  
  module.exports = userController;
  