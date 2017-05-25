'use strict';
// add hashing bcrypt etc in later versions that dont use oauth
// and are actual real applications
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[a-z0-9\_\-]+$/i,
        notEmpty: true,
        len: [1,50]
      }
    },
    email:{
      type:  DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING
  }, {
    underscored: true,
    classMethods: {
      associate: (models) => {
       User.hasMany(models.Item, {
          foreignKey: 'itemId',
          as: 'Items',
        });
      }
    }
  });
  return User;
};