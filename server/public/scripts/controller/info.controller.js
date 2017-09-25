app.controller('InfoController', function (UserService, $location) {
    // console.log('InfoController created');
    var self = this;
    self.message = "No user history yet.Please complete new user registration above and click ADD NEW USER."

    self.userObject = UserService.userObject;

    self.newUser = {
        supervisor: UserService.userObject
    };

    self.dashboard = function () {
        $location.path('/user');
    }
    

    //allows only show one checked checkbox 
    self.data = {};
    self.data.low = false;
    self.data.base = false;
    self.data.advanced = false;

    self.addUser = function () {
        if (self.newUser.pin === self.newUser.confirmpin) {
            UserService.newUser(self.newUser)
        } else {
            self.message = "Please ensure PINs match and resubmit."
        }
    }//end of addUser


    self.checkboxSelected = function (z) {
        if (z === "low") {
            self.data.base = false;
            self.data.advanced = false;
            self.newUser.level = "low";
        } else if (z == "base") {
            self.data.low = false;
            self.data.advanced = false;
            self.newUser.level = "base";
        } else if (z == "advanced") {
            self.data.low = false;
            self.data.base = false;
            self.newUser.level = "advanced";
        } else {
            self.newUser.level = "stop"
        }
        console.log(self.data)
        console.log(self.newUser);
        
    }//end of self.checkboxSelected



});



