var mongoose = require('mongoose'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	User = mongoose.model('User');

module.exports = function() {
	passport.use(new LocalStrategy({
		usernameField: 'email',
    passwordField: 'cpf'
	}, function(username, password, done) {
		User.findOne({
			email: username,
			cpf: password
		}, function(err, user) {
			if (user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		});
	}));

	passport.serializeUser(function(user, done) {
		if (user) {
			done(null, user._id);
		}
	});

	passport.deserializeUser(function(id, done) {
		User.findOne({
			_id: id
		}).exec(function(err, user) {
			if (user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		})
	});
}