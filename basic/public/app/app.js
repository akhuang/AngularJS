angular.module("ciadmin",[]);

angular.module("ciadmin")
    .controller("ciCtrl",['$scope','$interval','$http',function($scope,$interval){
        var vm = this;

        vm.status = "none";
        var i = 0;

        $interval(function() {
            i++;
            vm.status = "running"+ i;
        }, 3000);


    }]);
