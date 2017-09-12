app.service('loginService', ['$http', function ($http) {
    var self = this;
    console.log('login.service loaded');
    
    self.check = function (pinCheck) {
        console.log('self.check hit in service');
         $http.get('/login/'+ pinCheck).then(function (response) {
             console.log('service post response: ', response);
         });
    };//end of self.check


}]);//end of app.service