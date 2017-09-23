var app = angular.module('userApp', ['ngRoute', 'ngMaterial', /*'$mdDateLocaleProvider'*/]);
// agGrid.initialiseAgGridWithAngular1(angular); //move into dependecies 'agGrid'

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
        templateUrl: '/views/client/client.html',
        controller: 'UserController',
        controllerAs: 'uc',
        resolve: {
            getuser: function (UserService) {
                return UserService.getuser();
            }
        }
    }).when('/info', {
        templateUrl: '/views/client/clientinfo.html',
        controller: 'InfoController',
        controllerAs: 'ic',
        resolve: {
            getuser: function (UserService) {
                return UserService.getuser();
            }
        }
    }).when('/info/:id', {
        templateUrl: '/views/client/participantinfo.html',
        controller: 'ParticipentController',
        controllerAs: 'pc',
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