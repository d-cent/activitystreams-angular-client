(function() {
    'use strict';

    angular
        .module('app')
        .directive('dcBanner', dcBanner);

    /* @ngInject */
    function dcBanner($location) {
        // Usage:
        //      Add element <dc-navigation></dc-navigation>
        // Creates:
        //      Element that has the contents of navigation.directive.html
        var directive = {
            link: link,
            templateUrl: 'app/components/banner.directive.html',
            restrict: 'EA',
            controller: Banner,
            controllerAs: 'banner'
        };
        return directive;

        function Banner() {
        	var vm = this;

        }

        function link(scope, element, attrs) {
        }
    }
})();