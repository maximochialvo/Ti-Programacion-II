module.exports = function (sequelize, dataTypes){

    let alias = 'User';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
//        name: {
  //          type: dataTypes.STRING
  //      },
        email: {
            type: dataTypes.STRING
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
        }
        
    }

    let config = {
        tableName : "usuarios",
        timestamps:true,
        underscored: false,
    };

    const User = sequelize.define(alias, cols, config);

    return User;

}
