const pg = require('pg');
var PubNub = require('pubnub');

// Conexion con postgres
//var connectionString = process.env.ELEPHANTSQL_URL || 'postgres://postgres:12345678@localhost:5432/apicurdo';
var connectionString = process.env.ELEPHANTSQL_URL || "postgres://mattveso:EoQSBnjPQRmONUw1H4sXK3lQD-YJQKpB@pellefant.db.elephantsql.com:5432/mattveso";

const pool = new pg.Pool({
    connectionString: connectionString
})
module.exports = pool;

