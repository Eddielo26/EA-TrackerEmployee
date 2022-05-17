const mysql = require('mysql2');
const utils = require('util');

const connection =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_DB'
});

connection.connect();
connection.query = utils.promisify(connection.query);

module.exports = connection;

