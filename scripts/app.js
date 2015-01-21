var stockApp = angular.module('stockApp', ['ngRoute', 'ngResource']);

stockApp.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {

            // use this to destroying other existing headers
            config.headers = {'Authentication': 'authentication'};

            // use this to prevent destroying other existing headers
            config.headers = {
                'X-Parse-Application-Id': '7iP7MXeRA3XWJ7RwNbqZZra2wLVJ7HU8XRmeWphP',
                'X-Parse-REST-API-Key': 'Q2SpKAtXki0EMkZNyAPTpfUuuGhkkJY3fhiZ887P',
                'Content-Type': 'application/json'
            };
            //config.headers = {};
            return config;
        }
    };
});


stockApp.config(function ($routeProvider, $httpProvider) {
    // Set global headers for accessing parse.com.
    $httpProvider.interceptors.push('httpRequestInterceptor');

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
stockApp.constant('baseServiceUrl', 'https://api.parse.com');