'use strict';

angular.module('skillBump').controller('modalUserController', ['$scope', 'userResource', '$modalInstance',
    function ($scope, userResource, $modalInstance) {

        $scope.user = {};
        $scope.roles = ['ADMIN','AGENT','CUSTOMER'];
        $scope.alerts = [];

        $scope.save = function () {
            userResource.create($scope.user).then(function(response){
                $modalInstance.close($scope.user);
            },function(error){
                $scope.alerts.push({ type: 'danger', msg: error.data.message });
            });
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        }

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
    }]);