app.controller('UserController', ['UserService', '$location', 'ServiceService', function (UserService, $location, ServiceService) {
    console.log('UserController created');
    var vm = this;
    vm.userService = UserService;
    
    vm.userObject = UserService.userObject;

    vm.Users = ServiceService.Users;

    vm.newUser = function(){
        console.log('add student button clicked')
        var path = $location.path('/info');
    }

    vm.logout = function(){
        UserService.logout()
    } 
    
    
    ServiceService.getUsers();

}]);