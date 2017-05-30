// Express, framework to handle routing, request, response cycle and more
const express = require('express');
// morgan logs out information about your server activity
const logger = require('morgan');
// allows you to parse the body(of information) from requests made to your server
const bodyParser = require('body-parser');

const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// need to be able to parse cookies to have a session
app.use(cookieParser());

// use passport to handle user sessions to keep track of them
// while logged in
app.use(session({ secret: 'fourteenseventyfiveandttwentyairflightiniters' }));
app.use(passport.initialize());
app.use(passport.session());

// Require our routes into the application.
require('./server/routes')(app, passport);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;