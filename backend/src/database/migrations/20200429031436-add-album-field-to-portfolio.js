module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('portfolios', 'album_id', {
      type: Sequelize.INTEGER,
      references: { model: 'albums', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('portfolios', 'album_id');
  },
};
