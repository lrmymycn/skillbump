'use strict';

angular.module('skillBump').directive('navbar', [function () {
    return {
        templateUrl: 'views/directives/navbar.html',
        restrict: 'A',
        replace: true,
        link: function postLink($scope, element, attrs) {

        }
    };
}]);
