'use strict';

angular.module('skillBump').directive('breadcrumbs', [function () {
    return {
        templateUrl: 'views/directives/breadcrumbs.html',
        restrict: 'A',
        replace: true,
        link: function postLink($scope, element, attrs) {

        }
    };
}]);
