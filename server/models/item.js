module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    }, {
        classMethods: {
            associate: (models) => {
                Item.belongsTo(models.User, {
                    foreignKey: 'userId',
                    onDelete: 'CASCADE',
                });
            },
        },
    });
    return Item;
};
