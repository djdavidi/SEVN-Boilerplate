'use strict';
// add hashing bcrypt etc in later versions that dont use oauth
// and are actual real applications
// https://nodeontrain.xyz/tuts/secure_password/
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
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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

// module.exports = function(sequelize, DataTypes) {
 
//     var User = sequelize.define('user', {
 
//         id: {
//             autoIncrement: true,
//             primaryKey: true,
//             type: DataTypes.INTEGER
//         },
//         firstname: {
//             type: DataTypes.STRING,
//             notEmpty: true
//         },
//         lastname: {
//             type: DataTypes.STRING,
//             notEmpty: true
//         },
//         username: {
//             type: DataTypes.TEXT
//         },
//         about: {
//             type: DataTypes.TEXT
//         }, 
//         email: {
//             type: DataTypes.STRING,
//             validate: {
//                 isEmail: true
//             }
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         last_login: {
//             type: DataTypes.DATE
//         }
        
//     });
 
//     return User;
 
// }