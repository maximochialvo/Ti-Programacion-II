const userController = {
  index: function (req, res) {
    res.send('Pag principal');
  },

    registro: function (req, res) {
      res.render('register');
    },
  
    inicio: function (req, res) {
      res.render('login');
    }
  };
  
  module.exports = userController;
  