app.controller('loginController', ['loginService', '$location', '$mdDialog', function (loginService, $location, $mdDialog ) {
    console.log('login.controller loaded');
    var self = this;

    self.pinCheck = {};;
    self.User = loginService.User;
    self.message = "Please enter your pin."
    //self.auto_submit = setInterval(function () { self.check(self.pin.a, self.pin.b, self.pin.c, self.pin.d); }, 5000);
    
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
            // self.message= "Please enter your full PIN."
        }
    };//end of self.check
   
    self.clientLogin = function (){
        clearInterval(self.auto_submit);
        var path = $location.path('/clientLogin');
    }
    

}])//end of app.controller