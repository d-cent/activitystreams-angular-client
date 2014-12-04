(function(){
	'use strict';

	angular
		.module('app.home')
		.config(config);

	/* @ngInject */
	function config($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'app/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'home'
			});
	}
})();