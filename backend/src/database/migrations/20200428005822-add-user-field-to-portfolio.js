module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('portfolios', 'user_id', {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: false,
      unique: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('portfolios', 'user_id');
  },
};
