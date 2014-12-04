(function() {
    'use strict';

    angular
        .module('app')
        .directive('dcHeader', dcHeader);

    /* @ngInject */
    function dcHeader($location) {
        // Usage:
        //      Add element <dc-header></dc-header>
        // Creates:
        //      Element that has the contents of header.directive.html
        var directive = {
            link: link,
            templateUrl: 'app/components/header.directive.html',
            restrict: 'EA',
            controller: Header,
            controllerAs: 'header'
        };
        return directive;

        function Header() {
        	var vm = this;
            vm.displayLogin = false;

            vm.toggleLogin = function(){
                vm.displayLogin = !vm.displayLogin;
            }
        }

        function link(scope, element, attrs) {
        }
    }
})();