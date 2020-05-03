import Sequelize, { Model } from 'sequelize';

class Portfolio extends Model {
  static init(sequelize) {
    super.init(
      {
        event_type: Sequelize.STRING,
        value_hour: Sequelize.DOUBLE,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Album, { foreignKey: 'album_id', as: 'album' });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Portfolio;
