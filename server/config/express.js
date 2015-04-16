var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	session = require('express-session'),
	passport = require('passport');

module.exports = function(app, config) {
	app.set('views', config.rootPath + '/server/views');
	app.set('view engine', 'jade');

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(session({secret: 'xpto net turismo',resave:false,saveUninitialized:false}));
	app.use(passport.initialize());
	app.use(passport.session());

	app.use(express.static(config.rootPath + '/public'));
}