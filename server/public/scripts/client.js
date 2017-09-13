var app = angular.module('userApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './views/login.html',
        controller: 'loginController',
        controllerAs: 'lc'

    }).when('/zones', {
        templateUrl: './views/zone.html',
        controller: 'zoneController',
        controllerAs: 'zc'
    }).when('/emotions', {
        templateUrl: './views/emotions.html',
        controller: 'emoController',
        controllerAs: 'ec'
    }).when('/strategies',{
        templateUrl: './views/strategies.html',
        //add controler for done function
    })
    .otherwise({
        redirectTo: '/'
    });
}])