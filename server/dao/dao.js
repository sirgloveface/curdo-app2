var promise = require('bluebird');
var options = {
    // Initialization Options
    promiseLib: promise
};
var pgp = require('pg-promise')(options);
// Conexion con postgres
var connectionString = process.env.ELEPHANTSQL_URL || 'postgres://postgres:tony1983@localhost:5432/apicurdo';
//var connectionString = process.env.ELEPHANTSQL_URL || "postgres://mattveso:EoQSBnjPQRmONUw1H4sXK3lQD-YJQKpB@pellefant.db.elephantsql.com:5432/mattveso";
var db = pgp(connectionString);

module.exports = db;






