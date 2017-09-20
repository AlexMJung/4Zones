var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.post('/add', function (req, res) {
    console.log('add user route hit');
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            console.log(req.body);
            console.log(req.user);
            
            client.query("INSERT INTO participant (first_name, last_name, responder, level, pin, supervisor) VALUES ($1, $2, $3, $4, $5, $6)",
                [req.body.first_name, req.body.last_name, req.body.rEmail, req.body.level, req.body.pin, req.body.supervisor.userName], function (errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('Error making database query', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        console.log('results sent', result);
                        res.send(result.rows);
                    }//end of nested else
                });//end of client.query
        } //end of first else
    });// end of pool.connect
});




// Handles Ajax request for user information if user is authenticated
router.get('/', function (req, res) {
    console.log('get /user route');
    // check if logged in
    if (req.isAuthenticated()) {
        // send back user object from database
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username,
            name: req.user.first_name,
            lname: req.user.last_name,
            email: req.user.email
        };
        res.send(userInfo);
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
        res.send(false);
    }
});

// clear all server session information about this user
router.get('/logout', function (req, res) {
    // Use passport's built-in method to log out the user
    console.log('Logged out');
    req.logOut();
    res.sendStatus(200);
});


module.exports = router;
