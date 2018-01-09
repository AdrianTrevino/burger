var mysql = require('mysql');
var connection;


//SQL connection
    connection = mysql.createConnection({
        root: 3000,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db',
    });

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as: ' + connection.threadId);
});

module.exports = connection;