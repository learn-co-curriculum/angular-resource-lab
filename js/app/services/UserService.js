function UserService($http) {
	this.getUser = function () {
		return $http.get('/rest/user');
	};

	this.updateUser = function (user) {
		return $http.post('/rest/user', user);
	}
}

angular
	.module('app')
	.service('UserService', UserService);