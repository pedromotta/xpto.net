"use strict";
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: String,
	phone: String,
	email: String,
	cpf: String,
	isAdmin: Boolean
});

userSchema.methods = {
	// authenticate: function(passwordToMatch) {
	// 	return hashPwd(this.salt, passwordToMatch) === this.hashed_pws;
	// }
}

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
		User.find({}).exec(function(err, collection) {
		if (collection.length === 0) {
			User.create({
				name: 'Pedro Motta',
				phone: '3197243554',
				email: 'pedromotta@outlook.com',
				cpf: '10520533607',
				isAdmin: true
			});
			User.create({
				name: 'Usuario 1',
				phone: '319111111',
				email: 'user1@email.com',
				cpf: '11111111111',
				isAdmin: true
			});
			User.create({
				name: 'Usuario 2',
				phone: '3192222222',
				email: 'user2@email.com',
				cpf: '22222222222',
				isAdmin: false
			});
			User.create({
				name: 'Usuario 3',
				phone: '3193333333',
				email: 'user3@email.com',
				cpf: '33333333333',
				isAdmin: false
			});
			User.create({
				name: 'Usuario 4',
				phone: '3194444444',
				email: 'user4@email.com',
				cpf: '44444444444',
				isAdmin: false
			});
		}
	});
}

exports.createDefaultUsers = createDefaultUsers;