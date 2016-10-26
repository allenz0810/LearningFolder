(function () {
    "use strict"

    angular.module("app-trips").controller("tripsController", tripsController);

    function tripsController($http) {

        var vm = this;

        vm.trips = [];

        vm.errorMessage = "";
        vm.isBusy = true;

    //    {
    //        name: "US Trip",
    //        created: new Date()
    //    },{
    //    name: "World Trip",
    //    created: new Date()
    //}
        $http.get("/api/trips").then(function (response) {
            //success
            angular.copy(response.data, vm.trips);
        }, function () {
            //failure
            vm.errorMessage = "Fail to load data.";
        }).finally(function () {
            vm.isBusy = false;
        });

        vm.newTrips = {};

        vm.addTrip = function () {

            //vm.trips.push({ name: vm.newTrips.name, created: new Date() });
            //vm.newTrips = {};
            vm.errorMessage = "";
            vm.isBusy = true;

            $http.post("/api/trips", vm.newTrips).then(function (response) {
                //success
                vm.trips.push(response.data);
                vm.newTrips = {};
            }, function () {
                //failure
                vm.errorMessage = "Fail to add data.";
            }).finally(function () {
                vm.isBusy = false;
            });
        }
    }

})();