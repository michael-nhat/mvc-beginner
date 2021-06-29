const mysql = require('mysql');

const connect = mysql.createConnection({
    database: 'nhat1', 
    host: 'localhost',
    user: 'root',
    password: '0'
});

connect.connect(
    function(err) {
        if (err) throw err;
        console.log('Connected!')
    }
)