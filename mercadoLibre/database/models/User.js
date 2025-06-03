module.exports = function (sequelize, dataTypes) {

    let alias = 'User';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            
        },
//        name: {
  //          type: dataTypes.STRING
  //      },
        email: {
            type: dataTypes.STRING,
            unique: true,
            allowNull: false
        },
        usuario: {
            type: dataTypes.STRING
        },
        contrasena: {
            type: dataTypes.STRING
        },
        birthDate: {
            type: dataTypes.DATEONLY
        },
        remember_token: {
            type: dataTypes.STRING
        },
        foto_perfil: {
            type: dataTypes.STRING
        }
        

    }

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false,
    };

    const User = sequelize.define(alias, cols, config);


    User.associate = function (models) {
        User.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "usuario_id"
        });
     User.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'usuario_id'
        });
  
    }


    return User;



};
