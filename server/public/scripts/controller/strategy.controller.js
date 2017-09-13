app.controller('strategyController', ['loginService', "$location", function (loginService, $location) {
    console.log('strategy.controller loaded');
    var self = this;

    self.out = function(){
        loginService.out();
    }

}])//end of app.controller