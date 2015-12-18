angular.module('eureka.data', [])

.factory('Data', function ($http, $location, $window) {

	var searchValue = undefined;

	var username = JSON.parse($window.localStorage.getItem('eureka')).username;

	var token = JSON.parse($window.localStorage.getItem('eureka')).token;

	var links = undefined;

	return {
		searchValue: searchValue,
		token: token,
		username: username,
		links: links
	}

})