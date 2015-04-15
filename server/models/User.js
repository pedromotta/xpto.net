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
				name: 'Larissa de Paula',
				phone: '3199213554',
				email: 'larissa.depaula@ymail.com',
				cpf: '99999999999',
				isAdmin: false
			});
		}
	});
}

exports.createDefaultUsers = createDefaultUsers;