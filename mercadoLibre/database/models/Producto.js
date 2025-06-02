module.exports = function (sequelize, dataTypes) {

    let alias = 'Producto'

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },

        usuario_id: {
            type: dataTypes.INTEGER,
        },

        imagen_producto: {
            type: dataTypes.STRING,
        },

        nombre_producto: {
            type: dataTypes.STRING,
        },

        descripcion: {
            type: dataTypes.STRING,
        }
    }

    let config = {
        tableName: 'productos',
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.User, {
            as: "usuario",
            foreignKey: "usuario_id"
        });

                

    }

    



    return Producto;



}