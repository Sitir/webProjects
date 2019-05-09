// IMPORTS 
const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql');


//INIT 
const app = express();
const port = 3000;


//PLEASE SET UP CONNECTION 
//FOR YOUR MYSQL SERVER
const db_mysql = mysql.createConnection ({
    host: 'localhost', 
    user: 'root',
    password: 'toor',
    database: 'app',
    port: 8989
});



//SETUP
app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Hello World!'))


db_mysql.connect((err) => {
    if (err) {
        throw err;
    }
console.log("connected to database");
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

});

global.db_mysql = db_mysql;
