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
        templateUrl: './views/client/clientlogin.html'
        //add controler
    }).when('/home', {
        templateUrl: '/views/templates/home.html',
        controller: 'LoginController as lc',
    }).when('/register', {
            templateUrl: '/views/templates/register.html',
            controller: 'LoginController as lc'
        }).when('/user', {
            templateUrl: '/views/templates/user.html',
            controller: 'UserController as uc',
            resolve: {
                getuser: function (UserService) {
                    return UserService.getuser();
                }
            }
        }).when('/info', {
            templateUrl: '/views/templates/info.html',
            controller: 'InfoController',
            resolve: {
                getuser: function (UserService) {
                    return UserService.getuser();
                }
            }
        })
        .otherwise({
            redirectTo: 'http://www.zonesofregulation.com/index.html'
        });
}])