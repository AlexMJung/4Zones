app.service('ServiceService', ['$http', '$location', function ($http, $location) {
    var self = this;
    console.log('login.service loaded');

    self.Users = {list:[]};

    self.getUsers = function (){
        console.log("self.getUsers hit in service");
        $http.get('/getusers').then(function (response) {
            self.Users.list= response.data
            console.log("response from server is", response);
            

        })}


}]);