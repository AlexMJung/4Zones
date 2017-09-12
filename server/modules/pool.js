var pg = require('pg');

var config = {
    database: 'SoloProject',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 4000
};

module.exports = pg.Pool(config);