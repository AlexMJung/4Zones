app.controller('loginController', ['loginService', function (loginService, ) {
    var self = this;
    console.log('login.controller loaded');
    
    
    self.pinCheck = {}

    self.check = function (a,b,c,d) {
        self.pinCheck = a+b+c+d;
         console.log('clicked to login', self.pinCheck);
        loginService.check(self.pinCheck);
    };
}])//end of app.controller