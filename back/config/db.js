const Sequelize = require('sequelize')
const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT } = process.env

module.exports = () => {
  const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres'
  });

  sequelize
    .authenticate()
    .then(() => console.log("Connection established"))
    .catch((err) => console.log("Unable to connect to the database", err))
}