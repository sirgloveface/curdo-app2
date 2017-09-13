const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
var promise = require('bluebird');
var PubNub = require('pubnub');
//const env = process.env.NODE_ENV || 'development';
const env = process.env.NODE_ENV || 'test';
const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};

var options = {
    // Initialization Options
    promiseLib: promise
};
var pgp = require('pg-promise')(options);

let sequelize;
let dao;

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    sequelize = new Sequelize(
        config.database, config.username, config.password, config
    );
}

fs
    .readdirSync(__dirname)
    .filter((file) =>
(file.indexOf('.') !== 0) &&
(file !== basename) &&
(file.slice(-3) === '.js'))
.forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
    db[modelName].associate(db);
}
});


// Conexion con postgres
var connectionString = process.env.ELEPHANTSQL_URL || 'postgres://postgres:curdo@localhost:5432/apicurdo';
//var connectionString = process.env.ELEPHANTSQL_URL || "postgres://mattveso:EoQSBnjPQRmONUw1H4sXK3lQD-YJQKpB@pellefant.db.elephantsql.com:5432/mattveso";
dao = pgp(connectionString);



db.dao = dao;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;