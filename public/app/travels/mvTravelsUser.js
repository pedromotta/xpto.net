app.factory('mvTravelsUser', function($resource, mvIdentity) {
	var TravelResource = $resource('/api/users/:id/travels', {id: "@id"});

	return TravelResource;
});