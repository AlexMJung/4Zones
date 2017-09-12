app.service('zoneService', ['$http', function ($http){
var self=this;
console.log('zone.service loaded');



self.add = function(data) {
console.log('self.add hit in service');


$http.post('/zone', data).then(function (response){
    console.log('service post will add ', data.zone);
    
    console.log('service post response: ', response);
});
};//end of self.blue

}]);//end of app.service
