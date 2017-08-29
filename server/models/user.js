// 'use strict';
// // add hashing bcrypt etc in later versions that dont use oauth
// // and are actual real applications
// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define('User', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         is: /^[a-z0-9\_\-]+$/i,
//         notEmpty: true,
//         len: [1,50]
//       }
//     },
//     id: {
//       autoIncrement: true,
//       primaryKey: true,
//       type: Sequelize.INTEGER
//     },
//     email:{
//       type:  DataTypes.STRING,
//       unique: true,
//       validate: {
//         isEmail: true
//       }
//     },
//     password: DataTypes.STRING
//   }, {
//     underscored: true,
//     classMethods: {
//       associate: (models) => {
//        User.hasMany(models.Item, {
//           foreignKey: 'itemId',
//           as: 'Items',
//         });
//       }
//     }
//   });
//   return User;
// };

module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('user', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        username: {
            type: Sequelize.TEXT
        },
        about: {
            type: Sequelize.TEXT
        }, 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_login: {
            type: Sequelize.DATE
        }
        
    });
 
    return User;
 
}