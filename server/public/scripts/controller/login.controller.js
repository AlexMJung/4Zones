app.controller('LoginController', function ($http, $location, UserService) {
    console.log('LoginController created');
    var vm = this;
    vm.user = {
        username: '',
        password: '',
        confirm_password: '',
        first_name: '',
        last_name:'',
        email:''
    };
    vm.loginAttempts= 0;
    vm.message = 'Please login.';
    vm.rmessage = 'Please Register Below.'

    vm.login = function () {
        console.log('LoginController -- login', vm.user);
        if (vm.user.username === '' || vm.user.password === '') {
            vm.message = "Enter your username and password!";
        } else {
            console.log('LoginController -- login -- sending to server...', vm.user);
            $http.post('/', vm.user).then(function (response) {
                if (response.data.username) {
                    console.log('LoginController -- login -- success: ', response.data);
                    // location works with SPA (ng-route)
                    $location.path('/user'); // http://localhost:5000/#/user
                } else {
                    console.log('LoginController -- login -- failure: ', response);
                    vm.loginAttempts += 1;
                    vm.changeMessage(vm.loginAttempts);
                    // vm.message = "Username and password do not match, please try again.";
                }
            }).catch(function (response) {
                console.log('LoginController -- registerUser -- failure: ', response);
                vm.loginAttempts += 1;
                vm.changeMessage(vm.loginAttempts);
                
                console.log(vm.loginAttempts);
                
            });
        }
    };

    vm.changeMessage= function(failedAttempts){
        if (failedAttempts > 2) {
            vm.message = "If you have forgotten your password please see your system administator.";
        } else {
            vm.message = "Username and password do not match, please try again.";
        }
    }


    vm.registerUser = function () {
        console.log('LoginController -- registerUser');
        if (vm.user.username === '' || vm.user.password === '' || vm.user.confirm_password === '' ) {
            vm.rmessage = "Please choose a username and password.";
        } else {
            if(vm.user.password === vm.user.confirm_password){
            console.log('LoginController -- registerUser -- sending to server...', vm.user);
            $http.post('/register', vm.user).then(function (response) {
                console.log('LoginController -- registerUser -- success');
                $location.path('/clientLogin');
            }
            )
            } else if (vm.user.password !== vm.user.confirm_password) { 
                vm.rmessage = "Passwords do not match. Please try again.";
            }else{console.log('LoginController -- registerUser -- error');
                vm.rmessage = "Please try again."
            }
        }}
        
    
        })
