'use strict';

angular.module('skillBump').directive('sidebar', ['$location', function ($location) {
    return {
        templateUrl: 'views/directives/sidebar.html',
        restrict: 'A',
        replace: true,
        link: function postLink($scope, element, attrs) {
            $scope.menus = [{
                url: '#',
                icon: 'icon-dashboard',
                text: 'Dashboard'
            },{
                url: '#users',
                icon: 'icon-group',
                text: 'Users'
            }];

            $scope.isActive = function(menu){
                if($location.path().substring(1) == menu.url.substring(1)){
                    return 'active';
                }else{
                    return '';
                }
            }
        }
    };
}]);
