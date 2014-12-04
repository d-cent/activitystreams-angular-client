(function(){
	'use strict';

	angular
		.module('app.feed')
		.config(config);

	/* @ngInject */
	function config($routeProvider){
		$routeProvider
			.when('/feed', {
				templateUrl: 'app/feed/feed.html',
				controller: 'FeedCtrl',
				controllerAs: 'feed'
			});
	}
})();