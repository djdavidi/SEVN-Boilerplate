
// Express, framework to handle routing, request, response cycle and more
const express = require('express');
// morgan logs out information about your server activity
const logger = require('morgan');
// allows you to parse the body(of information) from requests made to your server
const bodyParser = require('body-parser');

const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const env = require('dotenv').load();

const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// need to be able to parse cookies to have a session
app.use(cookieParser());

// use passport to handle user sessions to keep track of them
// while logged in
// leave this fake secret in here for now until add in the env file before prod
app.use(session({ secret: 'fourteenseventyfiveandttwentyairflightiniters',resave: true,
    saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
// app.use(express.static(path.join(__dirname, '..', '..', 'client')));

// Require our routes into the application.
var models = require("./server/models/");
 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Database synced and ready to go')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

require('./server/routes')(app, passport);

app.get("*", (req, res) => res.status(200).send({
  message: "Welcome to the SEVN Boilerplate",
}));

app.use(function(err, req, res, next) {
	res.status(500).send({err: err});
});
require('./server/config/passport.js')(passport);

module.exports = app;