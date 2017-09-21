app.controller('UserController', ['UserService', '$location', 'serviceService', function (UserService, $location, serviceService) {
    console.log('UserController created');
    var vm = this;
    vm.userService = UserService;
    
    vm.userObject = UserService.userObject;

    vm.Users = serviceService.Users;

    vm.newUser = function(){
        console.log('add student button clicked')
        var path = $location.path('/info');
    }



    
    
    serviceService.getUsers();

}]);