(function(){
	'use strict';

	angular
		.module('app.feed')
		.controller('FeedCtrl', Feed);

	Feed.$inject = ['dataService'];

	function Feed(dataService){
		var vm = this;

		dataService.feed.get({}, function(posts, h){
			vm.posts = posts.items;
		});
	};
})();