module.exports = function (sequelize, dataTypes){

    let alias = 'User';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        remember_token: {
            type: dataTypes.STRING
        },
        birthDate: {
            type: dataTypes.DATEONLY
        }
    }

    let config = {
        tableName : "users",
        timestamps:true,
        underscored: true,
    };

    const User = sequelize.define(alias, cols, config);

    return User;

}
