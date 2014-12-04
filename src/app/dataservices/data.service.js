(function(){
	'use strict';

	angular
		.module('app.dataservice', [])
		.factory('dataService', dataService);

	dataService.$inject = ['$resource'];

	function dataService($resource){
		var feed = "jsondata/feed.json"
		var homeFeed = "jsondata/home-feed.json"
		
		return {
			posts: $resource(homeFeed),
			feed: $resource(feed)
		}
	}


})();