app.controller('strategyController', ['loginService', "$location", function (loginService, $location ) {
    console.log('strategy.controller loaded');
    var self = this;

    self.User = loginService.User
    console.log(self.User)

    self.checkLoggedIn = function () {
        if (self.User.LoggedIn == false) {
            $location.path("/")
        }
    }//end of checkLoggedIn

    self.alertResponder = function () {
        loginService.alertResponder();
    };

    self.out = function () {
        swal("Great job!", "Your update was saved", "success")
        loginService.out();
    }

    self.checkLoggedIn();
}])//end of app.controller