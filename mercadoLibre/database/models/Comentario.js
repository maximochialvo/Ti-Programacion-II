module.exports = function (sequelize, dataTypes) {
    let alias = 'Comentario';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        producto_id: {
            type: dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.TEXT
        },
    };

    let config = {
        tableName: 'comentarios',
        timestamps: true,
        underscored: false
    };

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function (models) {
        Comentario.belongsTo(models.User, {
            as: 'usuario',
            foreignKey: 'usuario_id'
        });

        Comentario.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: 'producto_id'
        });
    };

    return Comentario;
};
