'use strict';

var module = angular.module('skillBump', ['ngRoute','ui.bootstrap']);

module.constant('appSettings', {
    apiRoot: '/'
});

module.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'views/pages/dashboard.html',
            controller  : 'dashboardController'
        })
        // route for the user page
        .when('/users', {
            templateUrl : 'views/pages/user.html',
            controller  : 'userController'
        });
});

module.controller('appController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    //TODO get username from somewhere
    $rootScope.username = 'Sam';
}]);