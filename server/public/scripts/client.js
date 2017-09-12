var app = angular.module('userApp',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'./views/login.html'
    }).when('/zones',{
        templateUrl: './views/zones.html'
    })
}])