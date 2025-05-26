//const data = require('../db/datos')
let db = require("../database/models");
const bcrypt = require("bcryptjs")




let usersController = {
    show: function (req, res) {
        if (req.session.user) {
            return res.redirect("/")
        }
        return res.render("register");


    },

    create: function (req, res) {

        const user = {
            name: req.body.usuario,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.contrasena, 10)
        }


        db.User.create(user)
        .then(function (userCreated) {
            return res.redirect("/")
        }).catch(function (error) {
            return res.send(error)
        })


    },



    login: function (req, res) {
         if (req.session.user) {
            return res.redirect("/")
        }
        return res.render("login");
    },

    processLogin: function (req, res) {

        db.User.findOne({
            where: [{ email: req.body.email }]
        }).then(function (resultado) {
            if (!resultado) {
                return res.send("No exsiste ese email en la base de datos");
            }

            console.log(resultado, 'resultado aca')



            const contraseniaValida = bcrypt.compareSync(req.body.contrasena, resultado.password);

            console.log(contraseniaValida)

            if (contraseniaValida) {

                req.session.user = resultado
                console.log('funciona')
                if (req.body.recordarme) {
                    res.cookie("recordarme", resultado.id, {maxAge: 1000*60*5})
                }
                res.redirect("/")
            } else {
                return res.send("contrasenia no coincide")
            }

        }).catch(function (error) {
            return res.send(error)
        })



        //Si además el usuario tildó "recordame" entonces también creamos una cookie con los datos del usuario.

        console.log(req.body);
    },



    logout: function (req, res) {
        //Procesamos el logout destruyendo la sesión y eliminando la cookie.
        req.session.destroy()
         res.clearCookie("recordarme"); 
        res.redirect("/");
    }

};


module.exports = usersController;










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

//if (req.body.contrasena.length <3 ){
//    return res.send("la contrasenia tiene que tener al menos 3 caracteres")
//}

//.findOne({
//    where: {
  //      email: req.body.email
   // }
//})
//.then(function(resultado){
  //  if (resultado)
    //    return res.send("el usuario exsiste")
//})



// logout: function (req, res) {
  //      //Procesamos el logout destruyendo la sesión y eliminando la cookie.
   //     req.session.destroy()
    //    res.clearCookie("recordarme"); // ← igual que el ejemplo de la imagen
     //   res.redirect("/");
    //}





module.exports = controlador