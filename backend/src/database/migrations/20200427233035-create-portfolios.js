module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('portfolios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      value_hour: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('portfolios');
  },
};
