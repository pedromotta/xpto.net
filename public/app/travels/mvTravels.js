app.factory('mvTravels', function($resource, mvIdentity) {
	var TravelResource = $resource('/api/travels/:id', { id: "@id"}, {
		'update': {
			method: 'PUT'
		}
	});

	return TravelResource;
});