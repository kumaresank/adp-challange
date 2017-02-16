var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kisan@123',
    database: 'got'
})
module.exports = {
    connection: connection
}