app.controller('MyTravelsCtrl', function($scope, mvTravels, mvTravelsUser, mvIdentity) {

	var travels = mvTravelsUser.query({id: mvIdentity.currentUser._id});
	
	$scope.travels = travels;

	$scope.onRate = function(value) {
		mvTravels.update({id: value._id}, value);
	};

});