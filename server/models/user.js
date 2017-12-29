module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      }
    },
    password: DataTypes.STRING
  }, {
    classMethods: {
    },
    instanceMethods: {
    }
  });
  return User;
};