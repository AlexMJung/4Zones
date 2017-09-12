app.controller('zoneController', ['zoneService', function(zoneService){
var self= this;
console.log('zone.controller loaded');

self.newData = { }

self.add = function (z) {
     
    self.newData.zone = z
    

    console.log('clicked to log blue zone', self.newData);
    zoneService.add(self.newData);
};
}])//end of app.controller