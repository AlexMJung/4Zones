app.service('UserService', function ($http, $location) {
    console.log('UserService Loaded');
    var self = this;

    self.userObject = {
    };


    self.start={}
    self.end={}
  

    self.gotParticipantHistory = { list: {},
    };

    self.participent = {};
    // self.getParticipant = function(){
    //     console.log('self.getParticipant Ran');
    //     $http({
    //         method:'GET',
    //         ulr: '/user/'
    //     })
        
    // }
  
    // self.updateParticipantStuff = function(z){
    //     console.log('updatedParticipant was passed', z);
    //     $http({
    //         method: 'PUT',
    //         url: '/user/updateParticipant',
    //         data: z,      
    //     }).then(function (response) {
    //         console.log(response);
    //         if (response.status === 200) {
    //             self.gotParticipantHistory.list = response
    //         };
    //         console.log('gotParticipantHistory', self.gotParticipantHistory);
    //     })
    // }

    // self.userHistoryFiltered= function(z){
    //     console.log('history filtered was passed', z, self.start.Date, self.end.Date);
        
    //     $http({
    //         method: 'GET',
    //         url: '/user/filteredhistory/',
    //         params: {
    //             pin: z,
    //             start: self.start.Date,
    //             end: self.end.Date
    //         }
    //         //  + z + '/' + self.start.Date + '/' + self.end.Date 
    //     }).then(function (response) {
    //         console.log(response);
    //         if (response.status === 200) {
    //             self.gotParticipantHistory.list = response
    //         };
    //         console.log('gotParticipantHistory', self.gotParticipantHistory);
    //     })
    // }//userHistoryFiltered

    // self.getParticipantName =function(z){
    //     console.log('item passed to get participent name', z);
    //     $http({
    //         method: 'GET',
    //         url: '/user/name/' + z
    //     }).then(function (response) {
    //         console.log(response);
    //         if (response.status === 200) {
    //             self.participentName = response.rows
    //         };
    //         console.log(self.participentName);   
    //     })  
    // };//end of getParticipantName

    self.userHistory = function (z) {
        console.log("this item was passed in", z);
        $http({
            method: 'GET',
            url:'/user/history',
            params: {
                pin: z
            },
        }).then(function (response) {
            console.log(response);
            if (response.status === 200) {
              self.gotParticipantHistory.list = response  
            };
            console.log('gotParticipantHistory', self.gotParticipantHistory);
         })
    };//end of userHistory



    self.newUser = function(addedUser){
        console.log('newUser() hit');
        $http.post('/user/add', addedUser).then(function (response){
            console.log(response);
            if(response.status === 200){
                alert("User added! Please note students will not show on the dashboard until they have made their first entry");
            }else{
                alert("User not added. Please try again.")
            }
        })        
    }

       self.getuser= function (z) {
            console.log('UserService -- getuser');
            $http.get('/user').then(function (response) {
                console.log(response);            
                if (response.data.username) {
                    // user has a curret session on the server
                    self.userObject.userName = response.data.username;
                    self.userObject.name = response.data.name;
                    self.userObject.lname = response.data.lname;
                    self.userObject.email = response.data.email;
                    console.log('UserService -- getuser -- User Data: ', self.userObject);
                } else {
                    console.log('UserService -- getuser -- failure');
                    // user has no session, bounce them back to the login page
                    $location.path("/home");
                }
            }, function (response) {
                console.log('UserService -- getuser -- failure: ', response);
                $location.path("/home");
            });
        },

        self.logout= function () {
            console.log('UserService -- logout');
            $http.get('/user/logout').then(function (response) {
                console.log('UserService -- logout -- logged out');
                $location.path("/clientLogin");
            });
        }
});
