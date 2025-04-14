const data = require('../db/datos')

const controlador = {
    index: function (req, res) {
        res.render('profile', { usuario: data.usuario, productos: data.productos })
    }
}

module.exports = controlador