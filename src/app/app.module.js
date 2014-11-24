(function() {
	'use strict';
	
	angular
		.module('app', [
			'ngRoute',
			'ngResource',
			'app.home',
			'app.feed',
			'app.dataservice'
		]);
}());