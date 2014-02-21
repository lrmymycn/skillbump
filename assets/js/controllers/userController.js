'use strict';

angular.module('skillBump').controller('userController', ['$scope', 'userResource', '$modal', function ($scope, userResource, $modal) {
    /*
      userResource.getAll().then(function (response) {
        $scope.users = response.data;
      });
    */

    $scope.userModalOptions = {
        backdrop: 'static',
        templateUrl: 'views/modals/user.html',
        controller: 'modalUserController'
    };

    $scope.addNewUser = function () {
        $modal.open($scope.userModalOptions);
    };
}]);
