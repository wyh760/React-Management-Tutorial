const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {

    res.send([ 
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/any',
            'name': 'John Doe',
            'birtday': '1990-01-01',
            'gender': 'Male',
            'job': 'Engineer'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/66/65/2',
            'name': 'wooyonghak',
            'birtday': '1976-03-21',
            'gender': 'girl',
            'job': '자영업자'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/66/65/3',
            'name': 'kimheesun',
            'birtday': '1977-07-07',
            'gender': 'girl',
            'job': '자영업자222'
          },
          {
            'id': 4,
            'image': 'https://placeimg.com/65/65/4',
            'name': 'shin sung woo',
            'birtday': '1977-09-09',
            'gender': '남자',
            'job': '가수'
          }
    ]);

    // connection.query(
    //   "SELECT * FROM CUSTOMER WHERE isDeleted = 0",
    //   (err, rows, fields) => {
    //       res.send(rows);
    //   }  
    // );
});


app.listen(port, () => console.log(`Listening on port ${port}`));