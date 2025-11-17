const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',    
  user: 'root',         
  password: 'toor',         
});


connection.connect((err) => {
  if (err) throw err;
  console.log("✅ Connected to MySQL Server");

  connection.query("CREATE DATABASE IF NOT EXISTS CollegeDB", (err, result) => {
    if (err) throw err;
    console.log("🎓 Database 'CollegeDB' created or already exists.");

    connection.changeUser({ database: 'CollegeDB' }, (err) => {
      if (err) throw err;
      console.log("📂 Switched to database 'CollegeDB'");

      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS Students (
          id INT PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(50),
          age INT,
          course VARCHAR(30)
        )
      `;

      connection.query(createTableQuery, (err, result) => {
        if (err) throw err;
        console.log("🧾 Table 'Students' created successfully.");

        connection.end();
      });
    });
  });
});

