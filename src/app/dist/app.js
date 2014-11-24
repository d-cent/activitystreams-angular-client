(function() {
'use strict';
	var app = angular.module('asAc', ['ngRoute']);

	app.controller("TestCtrl", ["$scope", function($scope) {
		var test = "test string";
	}]);
}());