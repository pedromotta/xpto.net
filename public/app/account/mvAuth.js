app.factory('mvAuth', function($http, mvIdentity, $q, mvUser) {
	return {
		authenticateUser: function(email, cpf) {
			var dfd = $q.defer();
			$http.post('/login', {
				email: email,
				cpf: cpf
			}).then(function(response) {
				if (response.data.success) {
					var user = new mvUser();
					angular.extend(user, response.data.user);
					mvIdentity.currentUser = user;
					console.log(user);
					dfd.resolve(true);
				} else {
					dfd.resolve(false);
				}
			});

			return dfd.promise;
		},

		logoutUser: function() {
			var dfd = $q.defer();

			$http.post('/logout', {
				logout: true
			}).then(function() {
				mvIdentity.currentUser = undefined;
				dfd.resolve();
			});

			return dfd.promise;
		},

		authorizedCurrentUserForRoute: function(role) {
			if (mvIdentity.isAuthorized(role)) {
				return true;
			} else {
				return $q.reject('nao autorizado');
			}
		}
	}
});