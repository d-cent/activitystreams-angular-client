(function(){
	'use strict';

	angular
		.module('app.home')
		.controller('HomeCtrl', Home);

	Home.$inject = ['dataService'];

	function Home(dataService){
		var vm = this;

		dataService.posts.get({}, function(posts, h){
			vm.posts = posts.items;
		});

		vm.test = "This is a testvalue";
	};
})();