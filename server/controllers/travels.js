"use strict";
var mongoose = require('mongoose'),
	Travel = mongoose.model('Travel');

exports.getTravels = function(req, res) {
	var filter = req.query.filter;

	if (filter) {
		return getTravelsByFilter(req, res, filter);
	}

	Travel.find({}).exec(function(err, collection) {
		res.send(collection);
	});
};

function getTravelsByFilter(req, res, filter) {
	var sort;

	if (filter === 'best') {
		agregateTravels(req, res, -1);
	} else if (filter === 'worst') {
		agregateTravels(req, res, 1);
	} else {
		res.send([]);
	}
}

function agregateTravels(req, res, sort) {
	Travel.aggregate(
		[
			// Grouping pipeline
			{
				"$group": {
					"_id": '$destination',
					"average": {
						"$avg": '$rate'
					}
				}
			},
			// Sorting pipeline
			{
				"$sort": {
					"average": sort
				}
			},
			// Optionally limit results
			{
				"$limit": 5
			}
		],
		function(err, result) {
			res.send(result);
			// Result is an array of documents
		}
	);
}

exports.getTravelsFromUser = function(req, res) {
	Travel.find({
		user: mongoose.Types.ObjectId(req.params.id)
	}).exec(function(err, collection) {
		res.send(collection);
	});
};

exports.updateTravel = function(req, res) {
	var travel = req.body;

	Travel.update({
		_id: req.params.id
	}, {
		$set: {
			rate: travel.rate
		}
	}, function(err) {
		if (err) {
			res.status(400);
			return res.end();
		}

		res.status(200);
		res.end();
	})

};