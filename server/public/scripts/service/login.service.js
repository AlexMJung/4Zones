app.service('loginService', ['$http', '$location', function ($http, $location) {
    var self = this;
    console.log('login.service loaded');
    self.User = {
        Name: {},
        PIN: {},
        Zone: {},
        Emotion: {},
        LoggedIn: false,
        responderAlerted: false
    };

    self.message ="Please enter your passcode"

    self.check = function (pinCheck) {
        console.log('self.check hit in service');
        $http.get('/login/' + pinCheck).then(function (response) {
            self.User.LoggedIn = false;
            console.log('service post response: ', response.data[0]); 
            if (response.data[0] != undefined){ 
                self.User.Name = response.data[0].first_name + " " + response.data[0].last_name;
                self.User.PIN = response.data[0].pin;
                self.User.LoggedIn = response.data[0].LoggedIn;
            }}).then(function () {
                console.log('logged in? why you no move on?');
                
                if (self.User.LoggedIn == true) {
                    $location.path('/zones');
                    console.log('hit if loggedin true');
                    
                } else {
                    self.message = "PIN not found please try again."
                    console.log('hit if loggedin false');
                    $location.path('/zones');
                };
        });
    };//end of self.check


    self.add = function (data) {
       // console.log('self.add hit in service w/ data of', data);
        self.User.Zone = data;
       console.log('new object after .add', self.User);

        //*****add if statement to check for selected level then use http post below */
        // $http.post('/zone', data).then(function (response) {
        //     console.log('service post will add ', data.zone);

        //     console.log('service post response: ', response);
        // });
    };//end of self.add

    self.addEmotion = function (data) {
        console.log('self.add hit in service w/ data of', data);
        self.User.Emotion = data;
     //   console.log('new object after .add', self.User);
        $http.post('/logger', self.User).then(function (response) {
          console.log('service post will add ', self.User);

            console.log('service post response: ', response);
            var path = $location.path('/strategies');  
        });
    };//end of seld.addEmotion

    self.alertResponder = function () {
        console.log('alert responder button hit.');
        self.User.responderAlerted = true;
        swal("Thank you for asking for help","A message has been sent to your case manager.")
        $http.post('/logger', self.User).then(function (response){
  var path = $location.path('/strategies');
    });
        
    }; //end of self.alertResponder




    self.back = function(){
        self.User.Zone = {};
        var path = $location.path('/zones');
    }

    self.out = function () {
        self.User = {
            Name: {},
            PIN: {},
            Zone: {},
            Emotion: {},
            LoggedIn: false
        };
        var path = $location.path('/');
    }

}]);//end of app.service