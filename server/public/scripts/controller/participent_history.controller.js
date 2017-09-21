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

    // self.columnDefs = [
    //     { headerName: "Posted", field: "posted" },
    //     { headerName: "Zone", field: "zone" },
    //     { headerName: "Emotion", field: "emotion" },
    //     { headerName: "Cause", field: "cause" },
    //     { headerName: "Response", field: "response"},
    //     { headerName: "Help called", field: "help"},
    //     { headerName: UserService.userObject.name + " notes", field: "notes"}
    // ];

    // self.rowData = [
    //     { posted: "Toyota", zone: "Celica", emotion: 35000, cause: null, response: null, help: "no", notes: null },
 
    // ];

//     for(x = 0; x < UserService.userHistory.length; x++) {
//         rowData.push({ posted: UserService.userHistory.data[x].created_at, 
//             zone: UserService.userHistory.data[x].zone, 
//             emotion: UserService.userHistory.data[x].emotion},)
        
//  }

    // self.gridOptions = {
    //     columnDefs: self.columnDefs,
    //     rowData: self.rowData
    // };


    // //update user functionality
    // self.updateUser = function () {
    //     if (self.newUser.pin === self.updateUser.confirmpin) {
    //         UserService.newUser(self.updateUser)
    //     } else {
    //         self.message = "Please ensure PINs match and resubmit."
    //     }
    // }//end of updateUser

    // //allows only show one checked checkbox 
    // self.data = {};
    // self.data.low = false;
    // self.data.base = false;
    // self.data.advanced = false;


    // self.checkboxSelected = function (z) {
    //     if (z === "low") {
    //         self.data.base = false;
    //         self.data.advanced = false;
    //         self.newUser.level = "low";
    //     } else if (z == "base") {
    //         self.data.low = false;
    //         self.data.advanced = false;
    //         self.newUser.level = "base";
    //     } else if (z == "advanced") {
    //         self.data.low = false;
    //         self.data.base = false;
    //         self.newUser.level = "advanced";
    //     } else {
    //         self.updateUser.level = "stop"
    //     }
    //     console.log(self.data)
    //     console.log(self.updateUser);

    // }//end of self.checkboxSelected


})