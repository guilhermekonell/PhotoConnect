import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Portfolio from '../app/models/Portfolio';
import Album from '../app/models/Album';
import Service from '../app/models/Service';

import databaseConfig from '../config/database';

const models = [User, File, Portfolio, Album, Service];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
