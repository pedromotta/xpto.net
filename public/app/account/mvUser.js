app.factory('mvUser', function($resource) {
	var UserResource = $resource('/api/users/:id', {_id: "@id"});

	return UserResource;
});