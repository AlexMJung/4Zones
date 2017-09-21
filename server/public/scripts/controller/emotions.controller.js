app.controller('emoController', ['loginService', '$location', function (loginService, $location) {
    console.log('emo.controller loaded');
    var self = this;

    self.User = loginService.User;
    self.newData = {};

    self.color = {
        a: {},
        b: {},
        c: {},
        d: {},
    };

    if (self.User.Zone == "green") {
        self.color = {
            a: 'Good',
            b: 'Calm',
            c: 'Relaxed',
            d: 'Ready to learn'
        }
    } else if (self.User.Zone == "blue") {
        self.color = {
            a: 'Sad',
            b: 'Tired',
            c: 'Bored',
            d: 'Hurt'
        }
    } else if (self.User.Zone == "yellow") {
        self.color = {
            a: 'Anxious',
            b: 'Overwhelmed',
            c: 'Annoyed',
            d: 'Embarrassed'
        }
    } else {
        self.color = {
            a: 'Mad',
            b: 'Aggresive',
            c: 'Yelling',
            d: 'Out of Control'
        }
    }

    self.add = function (z) {
        if(self.User.Zone == "green"){
            if (z === 'a'){
            self.newData = 'Good';
            } else if (z === 'b'){
                self.newData = 'Calm'
            } else if (z === 'c') {
                self.newData = 'Relaxed'
            } else if ( z === 'd'){
                self.newData = 'Ready to learn'
            }
        } else if (self.User.Zone == "blue") {
            if (z === 'a') {
                self.newData = 'Sad';
            } else if (z === 'b') {
                self.newData = 'Tired'
            } else if (z === 'c') {
                self.newData = 'Bored'
            } else if (z === 'd') {
                self.newData = 'Hurt'
            }
        } else if (self.User.Zone == "yellow") {
            if (z === 'a') {
                self.newData = 'Anxious';
            } else if (z === 'b') {
                self.newData = 'Overwhelmed'
            } else if (z === 'c') {
                self.newData = 'Annoyed'
            } else if (z === 'd') {
                self.newData = 'Embarrassed'
            }
        } else if (self.User.Zone == "red") {
            if (z === 'a') {
                self.newData = 'Mad';
            } else if (z === 'b') {
                self.newData = 'Aggressive'
            } else if (z === 'c') {
                self.newData = 'Yelling'
            } else if (z === 'd') {
                self.newData = 'Out of Control'
            }
        }
        console.log('clicked to log emotion', self.newData);
        loginService.addEmotion(self.newData);
    };
    
    self.alertResponder = function (){
        loginService.alertResponder();
    };

    self.back = function () {
        loginService.back();
    };

    self.checkLoggedIn = function () {
        if (self.User.LoggedIn == false) {
            $location.path("/home")
        }
    }//end of checkLoggedIn
    
    self.checkLoggedIn();
}])//end of app.controller