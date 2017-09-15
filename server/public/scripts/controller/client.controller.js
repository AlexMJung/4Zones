app.controller('UserController', ['UserService', '$location', function (UserService, $location) {
    console.log('UserController created');
    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;

    vm.newUser = function(){
        console.log('student button clicked')
        var path = $location.path('/info');
    }

   
}]);