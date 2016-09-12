angular.module("ciadmin", ["angular-uuid"]);

angular.module("ciadmin")
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }])
    .controller("ciCtrl", ['$scope', '$interval', '$http', 'uuid', function ($scope, $interval, $http, uuid) {
        var vm = this;

        vm.status = "none";
        var i = 0;



        // $interval(function() {
        //     i++;
        //     vm.status = "running"+ i;
        // }, 3000); 


        var buidConfigId = uuid.v4();
        var buildConfigData = {
            "project": {
                "id": "Crm"
            }
        };

        // $http.get('http://localhost:9000/httpAuth/app/rest/buildTypes');

        var teamcityAddr = "http://172.168.1.3:9000/httpAuth/app/rest/latest/buildTypes";
        // var config = {
        //     headers: {
        //         'Authorization': 'Basic cGhvZW5peDowNTA5MTU='
        //     }
        // };
        // $http.post(teamcityAddr, buildConfigData, config).then(function (response) {
        //     vm.status = response.status;

        // });
        console.log(btoa('phoenix' + ":" + '050915@hf'));

        $.ajax({
            url: teamcityAddr,
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType: "application/json; charset=utf-8",
            data: buildConfigData,
            cache: false,
            // beforeSend: function (xhr) {
            //     xhr.setRequestHeader("Authorization", "Basic cGhvZW5peDowNTA5MTU=");
            // },
            headers: {
                "Authorization": "Basic cGhvZW5peDowNTA5MTU="
            },
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                vm.status = data.status;
            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        }).fail(function () {

        });


    }]);
