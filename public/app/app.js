var app = angular.module('xpto', ['ngResource', 'ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider, $locationProvider) {

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
});

app.run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function(evt, current, previous) {
		$location.path('/');
	})
});