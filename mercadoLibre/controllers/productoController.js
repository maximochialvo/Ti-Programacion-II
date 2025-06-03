const db = require('../database/models')
const op = db.Sequelize.Op;
const data = require('../db/datos')

const productoController = {
  detalle: function (req, res) {
    const id = req.params.id;
  
    db.Producto.findByPk(id, {
      include: [
        {
          association: 'comentarios',
          include: [
            {
              association: 'usuario'
            }
          ]
        }
      ]
    })
      .then(function (producto) {
        if (producto == undefined) {
          return res.send("Producto no encontrado");
        }
  
        res.render("product", {
          producto: producto
        });
      })
      .catch(function (error) {
        return res.send(error);
      });
  },
    
    add: function (req, res) {
      res.render('productAdd')
    }, 

    buscar: function (req, res){
      const busqueda = req.query.search;
      console.log('Busqueda' , busqueda)
      db.Producto.findAll({
        where: 
          {nombre_producto: {[op.like]: `%${busqueda}%`}},
          include: [{association: "usuario"}]
      })
        .then(function(resultados){
          return res.render("search-results", {producto: resultados})
      })
      .catch(function(error){
          return res.send(error);
      })      

    },

    detail: function (req, res){
      db.Producto.findByPk(req.params.id,{
        include: [
          {association: "usuario"},
          {association: "comentarios", 
            include: [{association: 'usuario'}]
          }

        ]}
      )
    .then(function(producto){
      if (req.session.user) {
        db.User.findByPk(req.session.user.id)
          .then(function(usuario){
            return res.render('product', {
              producto: producto,
              user: req.session.user,
              profile: usuario
            })
          })
        
      }else{
        res.render("product",
           { producto: producto });
      }

    })
    .catch(function(error){
          return res.send(error);
    });
    },

    agregarProducto: function(req,res){
      if(req.session.user == undefined){
        return res.redirect('/login')
      }
      db.Producto.create({
        usuario_id: req.session.user.id,
        imagen_producto: req.body.imagen_producto,
        nombre_producto: req.body.nombre_producto,
        descripcion: req.body.descripcion,
      })
      .then(function(){
        res.redirect('/');
      })
      .catch(function(error){
        return res.send(error);
  });
    },

    comentario: function (req, res) {
      if (req.session.user == undefined) {
        return res.redirect("/user/login");
      }
    
      db.Comentario.create({
        texto: req.body.texto,
        usuario_id: req.session.user.id,
        producto_id: req.params.id
      }).then(function () {
        res.redirect('/producto/detalle/' + req.params.id);
      }).catch(function (error) {
        return res.send(error);
      });
    },

    nuevoP: function(req, res){
      if (req.session.user) {
        db.User.findByPk(req.session.user.id)
            .then(function(usuario) {
                return res.render("productAdd", {
                    user: req.session.user,
                    perfil: usuario
                });
            });
    } else {
        return res.render("productAdd");
    }
},

    
  };

module.exports = productoController;