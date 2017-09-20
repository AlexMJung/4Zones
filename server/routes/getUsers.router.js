var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/', function (req, res) {
    console.log('router.getUsers hit');
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query("SELECT Distinct on (foo.pin) first_name, last_name, level, created_at, zone, emotion, responderalerted, pin from(SELECT first_name, last_name, level, created_at, zone, emotion, responderalerted, logs.pin as pin FROM participant join logs on logs.pin = participant.pin ORDER BY created_at desc) AS foo Order by foo.pin, created_at desc;", function (errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('Error making database query',errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        console.log('results sent', result);
                        res.send(result.rows);
                    }//end of nested else
                });//end of client.query
        } //end of first else
    });// end of pool.connect
});//end of router.post

module.exports = router;