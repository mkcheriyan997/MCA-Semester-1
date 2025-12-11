const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'toor',
  database: 'CollegeDB'
});

connection.connect((err) => {
  if (err) throw err;
  console.log("✅ Connected to CollegeDB");


  const displayQuery = `SELECT * FROM Students WHERE course = 'Computer Science'`;
  connection.query(displayQuery, (err, results) => {
    if (err) throw err;
    console.log("\n📚 Students enrolled in 'Computer Science':");
    console.table(results);

    const updateQuery = `UPDATE Students SET course = 'Data Science' WHERE id = 2`;
    connection.query(updateQuery, (err, result) => {
      if (err) throw err;
      console.log(`\n✅ Updated student with id = 2 to course 'Data Science'`);

      const deleteQuery = `DELETE FROM Students WHERE id = 3`;
      connection.query(deleteQuery, (err, result) => {
        if (err) throw err;
        console.log(`\n❌ Deleted student record with id = 3`);

        connection.end();
        console.log("\n🔒 Database connection closed.");
      });
    });
  });
});

