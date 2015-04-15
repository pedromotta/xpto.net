var app = angular.module('xpto', ['ngResource', 'ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider, $locationProvider) {
	// var routeRoleChecks = {
	// 	admin: {
	// 		auth: function(mvAuth) {
	// 			return mvAuth.authorizeCurrentUserForRoute('admin')
	// 		}
	// 	}
	// }

	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/', {
			templateUrl: '/views/main/main',
			controller: 'MainCtrl'
		})
		.when('/viagens', {
			templateUrl: '/views/travels/my-travels',
			controller: 'MyTravelsCtrl'
		})
		// .when('/admin/users', {
		// 	templateUrl: '/partials/admin/user-list',
		// 	controller: 'mvUserListCtrl',
		// 	resolve: routeRoleChecks.admin
		// });
});

app.run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
		if (rejection === 'nao autorizado') {
			$location.path('/');
		}
	})
});