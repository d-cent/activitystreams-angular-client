(function() {
    'use strict';

    angular
        .module('app')
        .directive('dcNavigation', dcNavigation);

    dcNavigation.$inject = ['$location'];

    /* @ngInject */
    function dcNavigation($location) {
        // Usage:
        //      Add element <dc-navigation></dc-navigation>
        // Creates:
        //      Element that has the contents of navigation.directive.html
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

            // Usage:
            //      Give function the route to check for and returns true / false
            // Creates:
            //      Can be used to add "active" class to navigation elements         
            vm.isActive = function(route) {
                return route === $location.path();
            };
        }

        function link(scope, element, attrs) {
        }
    }
})();