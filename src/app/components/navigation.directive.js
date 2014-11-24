(function() {
    'use strict';

    angular
        .module('app')
        .directive('dcNavigation', dcNavigation);

    /* @ngInject */
    function dcNavigation() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            templateUrl: 'app/components/navigation.directive.html',
            restrict: 'EA',
            controller: Navigation,
            controllerAs: 'nav'
        };
        return directive;

        function Navigation() {
        	var vm = this;
        }

        function link(scope, element, attrs) {
        }
    }
})();