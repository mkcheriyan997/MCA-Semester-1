const mysql = require('mysql2');
const rootCon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor'
});

rootCon.connect((err) => {
    if (err) {
        console.error('Error connecting:', err.stack);
        return;
    }
    console.log('Connected to MySQL server');


    rootCon.query('CREATE DATABASE IF NOT EXISTS T_db', (err) => {
        if (err) throw err;
        console.log('Database T_db created or already exists.');
    });
});


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'T_db'
});

module.exports = con;

