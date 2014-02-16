'use strict';

var module = angular.module('skillBump', ['ngRoute']);

module.constant('appSettings', {
    apiRoot: '/'
});

module.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'views/pages/home.html',
            controller  : 'mainController'
        })
        // route for the user page
        .when('/users', {
            templateUrl : 'views/pages/user.html',
            controller  : 'userController'
        });
});