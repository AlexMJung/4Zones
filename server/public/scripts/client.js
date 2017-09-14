var app = angular.module('userApp', ['ngRoute', 'ngMaterial']);

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
    }).when('/strategies', {
        templateUrl: './views/user/strategies.html',
        controller: 'strategyController',
        controllerAs: 'sc'
    }).when('/clientLogin', {
        templateUrl: '/views/client/clientlogin.html',
        controller: 'LoginController as Lc',
    }).when('/register', {
            templateUrl: '/views/client/clientregister.html',
            controller: 'LoginController as Lc'
        }).when('/user', {
            templateUrl: '/views/client/clientuser.html',
            controller: 'UserController as uc',
            resolve: {
                getuser: function (UserService) {
                    return UserService.getuser();
                }
            }
        }).when('/info', {
            templateUrl: '/views/client/clientinfo.html',
            controller: 'InfoController',
            resolve: {
                getuser: function (UserService) {
                    return UserService.getuser();
                }
            }
        })
        .otherwise({
            redirectTo: '/'
        });
}])