//const data = require('../db/datos')
let db = require("../database/models");
const bcrypt = require("bcryptjs");

let userController = {
     index: function (req, res) {
        if(req.session.user){
        res.render('profile', { usuario: res.req.user })
        }else{
            res.redirect('/user/login')
        }
    },

    
    show: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect("/usuario")
        }else{
        return res.render("register", {titulo : 'registro'});
        }

    },

    create: function (req, res) {

        if(req.body.password.length < 3 ){
    	        return res.send("la contrasenia tiene que tener al menos 3 caracteres")
            }
        db.User.findOne({
            where: [{ email: req.body.email }]
        })
        .then(function (usuario) {
            if (usuario) {
                return res.send("El usuario ya existe ");
            }

            const contraseniaValida = bcrypt.hashSync(req.body.password, 10)
            return db.User.create({
            name: req.body.usuario,
            email: req.body.email,
            password: contraseniaValida
        })     
            .then(function(){
                return res.redirect('/user/login')
            }
        )   .catch(function (error) {
                return res.send(error)
            })
      .catch(function (error) {
            return res.send(error)
        })
    })
            

    },
    login: function (req, res) {
         if (req.session.user != undefined) {
            return res.redirect("/")
        }else{
        return res.render("login", {titulo : 'login'});
    }},

    processLogin: function (req, res) {

        db.User.findOne({
            where: [{ email: req.body.email }]
        }).then(function (usuario) {
            if (usuario != null) {
                const contraseniaValida = bcrypt.compareSync(req.body.password, usuario.password);
                console.log(contraseniaValida)
                if (contraseniaValida) {

                    req.session.user = usuario
                    if (req.body.recordarme != undefined) {
                        res.cookie("recordarme", usuario.id, {maxAge: 1000*60*5})
                    }
                    console.log(req.session.user)
                    return res.redirect("/")
                } else {
                    return res.send("contraseña no coincide")
            }}
            else{
                return res.send('Usuario no identificado')
            }

        }).catch(function (error) {
            return res.send(error)
        })


       
  
    },

    
    logout: function(req, res) {
    
        req.session.destroy()
         res.clearCookie("recordarme"); 
        res.redirect("/");
    }

};


module.exports = userController;



