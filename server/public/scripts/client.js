var app = angular.module('userApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './views/user/login.html',
        controller: 'loginController',
        controllerAs: 'lc'

    }).when('/zones', {
        templateUrl: './views/user/zone.html',
        controller: 'zoneController',
        controllerAs: 'zc'
    }).when('/emotions', {
        templateUrl: './views/user/emotions.html',
        controller: 'emoController',
        controllerAs: 'ec'
    }).when('/strategies',{
        templateUrl: './views/user/strategies.html',
        controller: 'strategyController',
        controllerAs: 'sc'
        //add controler for done function
    }).when('/clientLogin',{
        templateUrl: './views/client/clientlogin.html'
        //add controler
    })
    .otherwise({
        redirectTo: '/'
    });
}])