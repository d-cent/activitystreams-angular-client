(function(){
	'use strict';

	angular
		.module('app.dataservice', [])
		.factory('dataService', dataService);

	dataService.$inject = ['$resource'];

	function dataService($resource){
		var postsPath = "../jsondata/feed.json"
		
		return {
			posts: $resource(postsPath),
		}
	}


})();