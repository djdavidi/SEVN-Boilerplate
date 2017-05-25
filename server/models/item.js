module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
  });
  return Item;
};