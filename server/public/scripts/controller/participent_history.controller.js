app.controller('ParticipentController', function (UserService, $routeParams, $location) {
    console.log('ParticipentController created');
    console.log('$routeParams', $routeParams);
    
    var self = this;

    self.userService = UserService;
    self.userObject = UserService.userObject;
    self.updateUser = {
        supervisor: UserService.userObject
    };

    self.myStartDate = UserService.start;
    self.myEndDate = UserService.end;
    
    console.log(self.myEndDate);
    console.log(self.myStartDate);
    
    self.dashboard = function(){
        var path = $location.path('/user')
    }
    

    UserService.userHistory($routeParams.id);

    self.userHistoryFiltered = function(){
        UserService.userHistoryFiltered($routeParams.id)
    }
    
    //update user functionality
    self.updateUser = function () {
        if (self.updatefUser.pin === self.updateUser.confirmpin) {
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
            self.updateUser.level = "low";
        } else if (z == "base") {
            self.data.low = false;
            self.data.advanced = false;
            self.updateUser.level = "base";
        } else if (z == "advanced") {
            self.data.low = false;
            self.data.base = false;
            self.updateUser.level = "advanced";
        } else {
            self.updateUser.level = "stop"
        }
        console.log(self.updateUser);

    }//end of self.checkboxSelected


})