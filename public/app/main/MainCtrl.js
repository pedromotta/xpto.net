app.controller('MainCtrl', function($scope, mvTravels, mvIdentity) {
	$scope.identity = mvIdentity;
	$scope.bestTravels = mvTravels.query({filter: 'best'});
	$scope.worstTravels = mvTravels.query({filter: 'worst'});
});