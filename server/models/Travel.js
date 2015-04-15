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

	var exampleTravels = [{
		date: new Date(2015, 4, 18),
		destination: 'Rio de Janeiro',
		rate: 2
	}, {
		date: new Date(2015, 5, 18),
		destination: 'São Paulo',
		rate: 2
	}, {
		date: new Date(2015, 6, 18),
		destination: 'Vitória',
		rate: 2
	}, ];

	User.find({}).exec(function(err, users) {
		users.forEach(function(user, indexUser) {
			exampleTravels.forEach(function(travel, indexTravel) {
				Travel.create({
					user: user._id,
					date: travel.date,
					destination: travel.destination,
					rate: travel.rate + indexUser
				});
			});
		});
	});
}

exports.createDefaultTravels = createDefaultTravels;