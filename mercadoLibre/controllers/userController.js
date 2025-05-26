//const data = require('../db/datos')
let db = require("../database/models");
const bcrypt = require("bcryptjs")




let usersController = {
    index: function (req, res) {
        res.render('profile', { usuario: data.usuario, productos: data.productos })
    },
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
        if(!req.body.contrasena.length, req.body.contrasena.length < 3 ){
    	        return res.send("la contrasenia tiene que tener al menos 3 caracteres")
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
        }).then(function (usuario) {
            if (!usuario) {
                return res.send("No exsiste ese email en la base de datos");
            }

            console.log(resultado, 'resultado aca')



            const contraseniaValida = bcrypt.compareSync(req.body.contrasena, usuario.contrasena);

            console.log(contraseniaValida)

            if (contraseniaValida) {

                req.session.user = resultado
                console.log('funciona')
                if (req.body.recordarme) {
                    res.cookie("recordarme", resultado.id, {maxAge: 1000*60*5})
                }
                return res.redirect("/")
            } else {
                return res.send("contraseña no coincide")
            }

        }).catch(function (error) {
            return res.send(error)
        })


        //Si además el usuario tildó "recordame" entonces también creamos una cookie con los datos del usuario.

        console.log(req.body);
    },

    
    logout: function(req, res) {
        //Procesamos el logout destruyendo la sesión y eliminando la cookie.
        req.session.destroy()
         res.clearCookie("recordarme"); 
        res.redirect("/");
    }

};


module.exports = usersController;



