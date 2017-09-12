var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//routing paths
var zone = require('./routes/zoneroute')


app.use(express.static('./server/public'));


app.use('/zone', zone);


app.listen(port, function(){
    console.log('listening on port', port);
    
})