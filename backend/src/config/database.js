module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'photoconnect',
  database: 'photoconnect',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
