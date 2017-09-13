app.controller('emoController', ['loginService', function (loginService) {
    console.log('emo.controller loaded');
    var self = this;

    self.newData = {};

    self.add = function (z) {
        self.newData = z
        console.log('clicked to log emotion', self.newData);
        loginService.addEmotion(self.newData);
    };

    self.back = function(){
        loginService.back();
    };
    // self.show = "ng-hide";

    // if (loginController.User.LoggedIn = "ng-hide") {
    //     self.show = "ng-show"
    // };

    // console.log('Emotion controller', self.show);

}])//end of app.controller