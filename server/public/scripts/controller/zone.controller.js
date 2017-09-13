app.controller('zoneController', ['loginService', "$location", function (loginService, $location){
    console.log('zone.controller loaded');
    var self= this;

self.newData = { };

self.add = function (z) {
    self.newData = z
    console.log('clicked to log zone', self.newData);
    loginService.add(self.newData); 
    var path = $location.path('/emotions');
};

// self.show = "ng-hide";

// if(loginController.User.LoggedIn="ng-hide"){
//     self.show = "ng-show"
// };

// console.log('Zone controller', self.show);

}])//end of app.controller