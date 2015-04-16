"use strict";
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var travelSchema = mongoose.Schema({
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	date: Date,
	destination: String,
	rate: Number
});

var Travel = mongoose.model('Travel', travelSchema);
var User = mongoose.model('User');

function createDefaultTravels() {

	Travel.find({}).exec(function(err, travels) {
		if (travels.length === 0) {
			forceCreateDefaultTravels();
		}
	});
}

function forceCreateDefaultTravels() {

	var destinations = ['Belo Horizonte', 'Maceio', 'Rio de Janeiro', 'Curitiba', 'Manaus', 'Cuiaba', 'Recife', 'Palmas', 'São Paulo', 'Natal'];

	User.find({}).exec(function(err, users) {
		users.forEach(function(user, indexUser) {
			var numTravels = randomIntInc(5, 10);
			for (var i = 0; i < numTravels; i++) {
				Travel.create({
					user: user._id,
					date: new Date(randomIntInc(2010, 2015), randomIntInc(1, 12), randomIntInc(1, 28)),
					destination: destinations[randomIntInc(0, 9)],
					rate: randomIntInc(1, 5)
				});
			};
		});
	});
}

function randomIntInc(low, high) {
	return Math.floor(Math.random() * (high - low + 1) + low);
}

exports.createDefaultTravels = createDefaultTravels;