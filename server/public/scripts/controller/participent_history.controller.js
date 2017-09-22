app.controller('ParticipentController', function (UserService, $routeParams) {
   

    console.log('ParticipentController created');
    console.log('$routeParams', $routeParams);
    
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;
    self.updateUser = {
        supervisor: UserService.userObject
    };


    
    UserService.userHistory($routeParams.id);

    //update user functionality
    self.updateUser = function () {
        if (self.newUser.pin === self.updateUser.confirmpin) {
            UserService.newUser(self.updateUser)
        } else {
            self.message = "Please ensure PINs match and resubmit."
        }
    }//end of updateUser

    //allows only show one checked checkbox 
    self.data = {};
    self.data.low = false;
    self.data.base = false;
    self.data.advanced = false;


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
            self.updateUser.level = "stop"
        }
        console.log(self.data)
        console.log(self.updateUser);

    }//end of self.checkboxSelected


})