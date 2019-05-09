// IMPORTS 
const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql');
const morgan = require('morgan');
const {getUsers} = require('./src/models/products');

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
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.get('/', (req, res) => res.send('Hello World!'))

app.get('/products', getUsers)


db_mysql.connect((err) => {
    if (err) {
        throw err;
    }
console.log("connected to database");
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

});


global.db_mysql = db_mysql;