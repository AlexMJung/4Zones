app.controller('emoController', ['loginService', '$location', '$interval', function (loginService, $location, $interval) {
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
            a: 'Happy',
            b: 'Calm',
            c: 'Focused',
            d: 'Ready to learn',
            g: 'Content',
            h: 'Relaxed'
        }
    } else if (self.User.Zone == "blue") {
        self.color = {
            a: 'Sad',
            b: 'Tired',
            c: 'Bored',
            d: 'Sick',
            g: 'Hurt',
            h: 'Moving slowly'

        }
    } else if (self.User.Zone == "yellow") {
        self.color = {
            a: 'Worried',
            b: 'Annoyed',
            c: 'Frustrated',
            d: 'Excited',
            g: 'Fidgety',
            h: 'Crabby'
        }
    } else {
        self.color = {
            a: 'Angry',
            b: 'Terrified',
            c: 'Elated',
            d: 'Out of Control',
            g: 'Mean',
            h: 'Yelling/Hitting'
        }
    }

    self.add = function (z) {
        if(self.User.Zone == "green"){
            if (z === 'a'){
                self.newData = 'Happy';
            } else if (z === 'b'){
                self.newData = 'Calm'
            } else if (z === 'c') {
                self.newData = 'Focused'
            } else if ( z === 'd'){
                self.newData = 'Ready to learn'
            } else if (z === 'g'){
                self.newData = 'Content'
            } else if (z === 'h'){
                self.newData = 'Relaxed'
            }

        } else if (self.User.Zone == "blue") {
            if (z === 'a') {
                self.newData = 'Sad';
            } else if (z === 'b') {
                self.newData = 'Tired'
            } else if (z === 'c') {
                self.newData = 'Bored'
            } else if (z === 'd') {
                self.newData = 'Sick'
            } else if (z === 'g') {
                self.newData = 'Hurt'
            } else if (z === 'h') {
                self.newData = 'Moving Slowly'
            }
        } else if (self.User.Zone == "yellow") {
            if (z === 'a') {
                self.newData = 'Worried';
            } else if (z === 'b') {
                self.newData = 'Annoyed'
            } else if (z === 'c') {
                self.newData = 'Frustrated'
            } else if (z === 'd') {
                self.newData = 'Excited'
            } else if (z === 'g') {
                self.newData = 'Fidgety'
            } else if (z === 'h') {
                self.newData = 'Crabby'
            }
        } else if (self.User.Zone == "red") {
            if (z === 'a') {
                self.newData = 'Angry';
            } else if (z === 'b') {
                self.newData = 'Terrified'
            } else if (z === 'c') {
                self.newData = 'Elated'
            } else if (z === 'd') {
                self.newData = 'Out of Control'
            } else if (z === 'g') {
                self.newData = 'Mean'
            } else if (z === 'h') {
                self.newData = 'Yelling/Hitting'
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


    //creates WhiteFrame effect
    // this.elevation = 1;
    // this.showFrame = 3;

    // this.nextElevation = function () {
    //     if (++this.elevation == 25) {
    //         this.elevation = 1;
    //     }
    // };

    // $interval(this.nextElevation.bind(this), 500);

    // this.toggleFrame = function () {
    //     this.showFrame = this.showFrame == 3 ? -1 : 3;
    // };


}])//end of app.controller