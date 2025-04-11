const mainController = {
    lupa: function(req, res) {
      res.render('main'); 
    },
  
    buscar: function(req, res) {
      const resultados = ['Chevrolet Onix', 'Toyota Hilux"', 'Renault Sandero RS'];
      res.render('search-results', { resultados: resultados });
    }
  };
  
  module.exports = mainController;
  