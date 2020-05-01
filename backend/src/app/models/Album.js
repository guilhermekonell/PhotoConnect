import Sequelize, { Model } from 'sequelize';

class Album extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.File, {
      foreignKey: 'album_id',
      as: 'files',
    });
  }
}

export default Album;
