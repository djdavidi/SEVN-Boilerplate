module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      // .INTEGER??
      type: DataTypes.NUMBER,
      allowNull: false,
    }
  });
  return Item;
};