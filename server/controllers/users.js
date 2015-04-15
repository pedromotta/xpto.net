var User = require('mongoose').model('User');

exports.getUsers = function(req, res) {
	User.find({_id: req.user._id}).exec(function(err, collection) {
		res.send(collection);
	});
}