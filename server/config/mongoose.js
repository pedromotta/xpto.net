var mongoose = require('mongoose'),
	userModel = require('../models/User');
	travelModel = require('../models/Travel');

module.exports = function(config) {
	mongoose.connect(config.db);

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error...'));
	db.once('open', function callback() {
		console.log('xpto db opened');
	});

	userModel.createDefaultUsers();
	travelModel.createDefaultTravels();
}