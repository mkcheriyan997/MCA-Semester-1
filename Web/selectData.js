const con = require('./Ex_db.js');

const sql = "SELECT * FROM students";

con.query(sql, (err, results) => {
    if (err) throw err;
    console.log("Student Records:");
    console.table(results);
    con.end();
});

