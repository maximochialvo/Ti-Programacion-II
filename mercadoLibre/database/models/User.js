module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    birthDate:{
        type:DataTypes.DATAONLY     
    }
  }, {
    tableName: 'users', 
    timestamps: true,
    underscored: true
  });

  return User;
};
