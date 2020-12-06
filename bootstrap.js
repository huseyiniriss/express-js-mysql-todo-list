var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'exspresstodolist',
    multipleStatements: true
})

connection.connect()

module.exports = {
    connection: connection,
};
