var session = require('express-session');
// var MSSQLStore = require('connect-mssql')(session);

// var config = {
//     user: '...',
//     password: '...',
//     server: 'localhost', // You can use 'localhost\\instance' to connect to named instance 
//     database: 'template1',

//     options: {
//     autoRemove: true,
//     autoRemoveInterval: true,       
//     }
// }

// app.use(session({
//     store: new MSSQLStore(config, options), // options are optional 
//     secret: 'supersecret'
// }));  //need to walk away but i bet lines 16-19 are using the expres session and modifiying it so it is figuring out where to allpy the app.use now. best guesss in the exports. 

module.exports = session({
    secret: 'secret',
    key: 'user', // this is the name of the req.variable. 'user' is convention, but not required
    resave: false,
    saveUninitialized: false,
    cookie: { maxage: 60000, secure: true }
});
