var auth = require('./auth'),
	mongoose = require('mongoose'),
	users = require('../controllers/users');
	travels = require('../controllers/travels');

module.exports = function(app) {

	app.get('/api/users', auth.requiresAdmin, users.getUsers);

	app.get('/api/users/:id/travels', auth.requiresApiLogin, travels.getTravelsFromUser);
	app.get('/api/travels', auth.requiresAdmin, travels.getTravels);	
	app.put('/api/travels/:id', auth.requiresApiLogin, travels.updateTravel);

	app.get('/views/*', function(req, res) {
		res.render('../../public/app/' + req.params[0]);
	});

	app.post('/login', auth.authenticate);

	app.post('/logout', function(req, res) {
		req.logout();
		res.end();
	});

	app.get('*', function(req, res) {
		res.render('index', {
			bootstrappedUser: req.user
		});
	});
}