const userController = {
    registro: function (req, res) {
      res.render('register');
    },
  
    inicio: function (req, res) {
      res.render('login');
    }
  };
  
  module.exports = userController;
  