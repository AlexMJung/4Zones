app.controller('loginController', ['loginService', function (loginService) {
    console.log('login.controller loaded');
    var self = this;

    self.pinCheck = {};;
    self.User = loginService.User;
    self.message = loginService.message

       self.check = function (a, b, c, d) {
        self.pinCheck = a + b + c + d;
        console.log('clicked to login', self.pinCheck);
        if (a != null && b != null && c != null && d != null) {
            console.log('full pin entered');
            loginService.check(self.pinCheck);
            clearInterval(self.auto_submit)
            } else {
            console.log('partial pin only');
            console.log(self.User);
        }
    };//end of self.check
   
}])//end of app.controller