app.controller('strategyController', ['loginService', "$location", "$mdDialog", function (loginService, $location, $mdDialog) {
    console.log('strategy.controller loaded');
    var self = this;

    self.User = loginService.User
    console.log(self.User)




    self.checkLoggedIn = function () {
        if (self.User.LoggedIn == false) {
            $location.path("/home")
        }
    }//end of checkLoggedIn

    // self.showAlert = function (ev) {
    //     $mdDialog.show(
    //         $mdDialog.alert()
    //             .parent(angular.element(document.querySelector('#background')))
    //             .clickOutsideToClose(true)
    //             .title('Great Job!')
    //             //.textContent('You can specify some description text in here.')
    //             .ariaLabel('Nice Work')
    //             .ok('Thanks!')
    //             .targetEvent(ev)
    //     );


    self.out = function () {
        loginService.out();
    }



    self.checkLoggedIn();
}])//end of app.controller