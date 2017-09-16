app.controller('loginController', ['loginService', '$location', function (loginService, $location) {
    console.log('login.controller loaded');
    var self = this;

    self.pinCheck = {};
    self.User = loginService.User
    self.showButton = false

    // self.pinBox = $mdPanel.newPanelPosition()
    //     .absolute()
    //     .top('25%')
    //     .left('20%');

    // let clock = setInterval(self.check, 500)

    self.check = function (a, b, c, d) {
        self.pinCheck = a + b + c + d;
        console.log('clicked to login', self.pinCheck);
        if (a != null && b != null && c != null && d != null) {
            console.log('full pin entered');
            self.showButton = true;
            loginService.check(self.pinCheck);
        } else {
            console.log('partial pin only');

        }
       
        };//end of self.check

    self.clientLogin = function (){
        var path = $location.path('/clientLogin');
    }


    
}])//end of app.controller