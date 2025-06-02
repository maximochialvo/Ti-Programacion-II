//const data = require('../db/datos')
//const  = require("sequelize");
let db = require("../database/models");
const bcrypt = require("bcryptjs");

let userController = {
    index: function (req, res) {
        if (req.session.user) {
            res.render('profile', { usuario: res.req.user })
        } else {
            res.redirect('/user/login')
        }
    },


    show: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect("/usuario")
        } else {
            return res.render("register", { titulo: 'registro' });
        }

    },

    create: function (req, res) {

        if (req.body.password.length < 3) {
            return res.send("la contrasenia tiene que tener al menos 3 caracteres")
        }
        const contrasenascript = bcrypt.hashSync(req.body.password, 10)
        const user = {
            usuario: req.body.usuario,
            email: req.body.email,
            contrasena: contrasenascript,
            birthDate: req.body.birthDate,
            foto_perfil: req.body.foto

        }
        db.User.create(user)

            .then(function () {
                return res.redirect('/user/login')
            }
            ).catch(function (error) {
                return res.send("Este email fue usado")
            })




    },
    login: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect("/perfil")
        } else {
            return res.render("login", { titulo: 'login' });
        }
    },

    processLogin: function (req, res) {
        console.log('entrando a metodo login')

        db.User.findOne({
            where: [{ email: req.body.email }]
        }).then(function (usuario) {
            console.log(usuario)
            if (usuario) {
                console.log(req.body.password, usuario.contrasena)
                const contraseniaValida = bcrypt.compareSync(req.body.password, usuario.contrasena);
                console.log(contraseniaValida)
                if (contraseniaValida) {
                    console.log('entro al if')
                    req.session.user = usuario;
                    if (req.body.recordarme != undefined) {
                        res.cookie("recordarme", usuario.id, { maxAge: 1000 * 60 * 5 })
                    }
                    console.log(req.session.user)
                    return res.redirect("/")
                } else {
                    return res.send("contraseña no coincide")
                }
            }
            else {
                return res.send('Usuario no identificado')
            }

        }).catch(function (error) {
            return res.send(error)
        })




    },

    profile: function (req, res) {

        
        const id = req.params.id
        
        // Then -> productos
        // En el render, mandar info del usuario
        // Vista -> Mostras info de usuario, productos, y comentarios 
        db.User.findByPk(id, {
            include:[

            {association: 'productos'},
            {association: 'comentarios'},

            ]})  .then(function (resultado) {
                console.log(resultado);
                

                return res.render('profile', {usuario:resultado } )
                
                
            })
            .catch(function (error) {
                return res.send(error)
            })
    },



    logout: function (req, res) {

        req.session.destroy()
        res.clearCookie("recordarme");
        res.redirect("/");
    }

};


module.exports = userController;



