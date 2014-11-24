(function(){
	'use strict';

	angular
		.module('app.feed')
		.config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider){
		$routeProvider
			.when('/feed', {
				templateUrl: 'app/feed/feed.html',
				controller: 'FeedCtrl',
				controllerAs: 'feed'
			});
	}
})();