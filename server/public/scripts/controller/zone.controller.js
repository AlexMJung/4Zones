app.controller('zoneController', ['loginService', "$location", function (loginService, $location) {
    console.log('zone.controller loaded');
    var self = this;

    self.newData = {};
    self.User = loginService.User

    self.add = function (z) {
        self.newData = z
        console.log('clicked to log zone', self.newData);
        loginService.add(self.newData);
        var path = $location.path('/emotions');
    };

    self.out = function () {
        loginService.out();
    }



}])//end of app.controller