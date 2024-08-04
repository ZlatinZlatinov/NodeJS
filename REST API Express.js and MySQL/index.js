const express = require("express");
const cors = require("cors");
const mySQL = require("mysql");
require('dotenv').config();

const server = express();
server.use(cors());
server.use(express.json());

const PORT = 3030;

const connection = mySQL.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// get all users
server.get('/', (req, res) => {
    let sql = "SELECT * FROM users";

    connection.query(sql, (error, result) => {
        if (error) {
            res.status(500).json({ error });
        } else {
            res.status(200).json(result);
        }
    });

});

//get user details
server.get('/details/:id', (req, res) => {
    const userId = req.params.id;
    const sql = `SELECT * FROM USERS WHERE id = ${userId}`;

    connection.query(sql, (error, result) => {
        if (error) {
            res.status(500).json({ error });
        } else {
            res.status(200).json(result);
        }
    });
});

//CREATE USER
server.post('/user', (req, res) => {
    const userData = req.body;//TODO: add validation

    const sql = `INSERT INTO users (firstName, lastName, age, email)
    VALUES ("${userData.firstName}", "${userData.lastName}", "${userData.age}", "${userData.email}")`;

    connection.query(sql, (error, result) => {
        if (error) {
            console.log(error);

            res.status(500).json({ error });
        } else {
            const sql2 = `SELECT * FROM users WHERE id=${result.insertId}`;

            connection.query(sql2, (err, rslt) => {
                if (err) {
                    req.status(500).json({ err });
                } else {
                    res.status(200).json(rslt);
                }
            })
        }
    });
});

//TODO: add PUT and DELETE

server.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}...`);
});