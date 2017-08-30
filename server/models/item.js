module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define('Item', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
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
