app.controller('NavBarLoginCtrl', function($scope, $http, mvIdentity, mvAuth, $location) {
	$scope.identity = mvIdentity;

	$scope.signin = function(email, cpf) {
		mvAuth.authenticateUser(email, cpf).then(function(success) {
			if (success) {
				console.log('Login efetuado com sucesso');
			} else {
				console.log('Login falhou');
			}
		})
	}

	$scope.signout = function() {
		mvAuth.logoutUser().then(function() {
			$scope.email = "";
			$scope.cpf = "";
			console.log('Você saiu!');
			$location.path('/');
		});
	}
});