var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js');
var encryptLib = require('../modules/encryption');

// Handles request for HTML file
router.get('/', function (req, res, next) {
    console.log('get /register route');
    res.sendFile(path.resolve(__dirname, '../public/views/templates/register.html'));
});

// Handles POST request with new user data
// Handles POST request with new user data
router.post('/', function (req, res, next) {

    var saveUser = {
        username: req.body.username,
        password: encryptLib.encryptPassword(req.body.password),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    };
    console.log('new user:', saveUser);

    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        client.query("INSERT INTO users (username, password, first_name, last_name, email) VALUES ($1, $2, $3, $4, $5) RETURNING id, first_name, last_name, email",
            [saveUser.username, saveUser.password, saveUser.first_name, saveUser.last_name, saveUser.email],
            function (err, result) {
                client.end();

                if (err) {
                    console.log("Error inserting data: ", err);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
    });

});


module.exports = router;
