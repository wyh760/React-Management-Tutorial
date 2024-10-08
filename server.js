const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql'); 

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();


app.get('/api/customers', (req, res) => {
  connection.query(
    "SELECT * FROM CUSTOMER",
    (err, rows, fields) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error occurred while fetching customers');
      } else {
        res.send(rows);  // 여기서만 res.send() 호출
      }
    }  
  );
});


app.listen(port, () => console.log(`Listening on port ${port}`));
 