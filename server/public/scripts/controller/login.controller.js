app.controller('loginController', ['loginService', '$location', function (loginService, $location) {
    console.log('login.controller loaded');
    var self = this;

    self.pinCheck = {};

    self.User = loginService.User

    self.check = function (a, b, c, d) {
        self.pinCheck = a + b + c + d;
        console.log('clicked to login', self.pinCheck);
        loginService.check(self.pinCheck);


        };//end of self.check





    
}])//end of app.controller