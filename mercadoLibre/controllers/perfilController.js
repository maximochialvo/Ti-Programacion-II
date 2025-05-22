const data = require('../db/datos')
let db = require("../database/models");

const controlador = {
    index: function (req, res) {
        res.render('profile', { usuario: data.usuario, productos: data.productos })
    },


create: function(req,res){
  const usuario = req.body.usuario
  const email = req.body.email
  const password = req.body.contrasena

  let passEncriptada = bcrypt.hashSync(password,10);
  db.User.create({
      name: usuario,
      email: email,
      password: passEncriptada,
      birthDate: birthDate
      
  }).then(function(){
      return res.redirect("/")
  }).catch(function(error){
      return res.send(error)
  })

}
};

module.exports = controlador