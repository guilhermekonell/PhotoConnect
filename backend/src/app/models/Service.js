import Sequelize, { Model } from 'sequelize';

class Service extends Model {
  static init(sequelize) {
    super.init(
      {
        status: Sequelize.STRING,
        event_type: Sequelize.STRING,
        description: Sequelize.STRING,
        street: Sequelize.STRING,
        street_number: Sequelize.INTEGER,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        canceled_at: Sequelize.DATE,
        start_event: Sequelize.DATE,
        end_event: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
    this.belongsTo(models.User, { foreignKey: 'client_id', as: 'client' });
    this.belongsTo(models.Album, { foreignKey: 'album_id', as: 'album' });
  }
}

export default Service;
