app.controller('loginController', function ($http, $location, UserService) {
    console.log('loginController created');
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
        console.log('loginController -- login', vm.user);
        if (vm.user.username === '' || vm.user.password === '') {
            vm.message = "Enter your username and password!";
        } else {
            console.log('loginController -- login -- sending to server...', vm.user);
            $http.post('/', vm.user).then(function (response) {
                if (response.data.username) {
                    console.log('loginController -- login -- success: ', response.data);
                    // location works with SPA (ng-route)
                    $location.path('/user'); // http://localhost:5000/#/user
                } else {
                    console.log('loginController -- login -- failure: ', response);
                    vm.loginAttempts += 1;
                    vm.changeMessage(vm.loginAttempts);
                    // vm.message = "Username and password do not match, please try again.";
                }
            }).catch(function (response) {
                console.log('loginController -- registerUser -- failure: ', response);
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
        console.log('loginController -- registerUser');
        if (vm.user.username === '' || vm.user.password === '' || vm.user.confirm_password === '' ) {
            vm.rmessage = "Please choose a username and password.";
        } else {
            if(vm.user.password === vm.user.confirm_password){
            console.log('loginController -- registerUser -- sending to server...', vm.user);
            $http.post('/register', vm.user).then(function (response) {
                console.log('loginController -- registerUser -- success');
                swal("Your all signed up!", "Have a great day!", "success")
                $location.path('/clientLogin');
            }
            )
            } else if (vm.user.password !== vm.user.confirm_password) { 
                vm.rmessage = "Passwords do not match. Please try again.";
            }else{console.log('loginController -- registerUser -- error');
                vm.rmessage = "Please try again."
            }
        }}
        
    
        })
