var stockApp = angular.module('stockApp', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {
        // Routing
        $routeProvider.when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        }).when('/login', {
           templateUrl: 'templates/login.html',
            controller: 'UserController'
        }).when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'UserController'
        }).otherwise({
            redirectTo: '/'
        });
    });