app.controller('strategyController', ['loginService', "$location", function (loginService, $location) {
    console.log('strategy.controller loaded');
    var self = this;
    
    self.User = loginService.User
    console.log(self.User)

    self.out = function(){
        loginService.out();
    }


    self.checkLoggedIn = function () {
        if (self.User.LoggedIn == false) {
            $location.path("/home")
        }
    }//end of checkLoggedIn

    self.checkLoggedIn();
}])//end of app.controller