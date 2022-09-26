// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Users extends Model {
//     /*
//     * Helper method for defining associations.
//     * This method is not a part of Sequelize lifecycle.
//     * The `models/index` file will call this method automatically.
//     */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Users.init({
//     email: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     role: {
//       type: DataTypes.INTEGER,
//       length: 1,
//       allowNull: false
//     },
//     dnisAccess: {
//       type: DataTypes.JSON,
//       allowNull: true,
//       get: function () {
//         return JSON.parse(this.getDataValue("dnisAccess"));
//       },
//       set: function (value) {
//         return this.setDataValue("dnisAccess", JSON.stringify(value));
//       }
//     },
  
//   }, {
//     sequelize,
//     modelName: 'Users',
//     tableName: 'Users',
//     timestamps: true
//   });
//   return Users;
// };