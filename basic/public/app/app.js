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
            "id": buidConfigId,
            "name": buidConfigId,
            "project": {
                "id": "Crm"
            },
            "vcs-root-entries": {
                "vcs-root-entry": [
                    {
                        "id": "Root_HttpsFy24hBitbucketOrgFy24hCrmGitRefsHeadsMaster",
                        "vcs-root": {
                            "id": "Root_HttpsFy24hBitbucketOrgFy24hCrmGitRefsHeadsMaster",
                            "name": "https://fy24h@bitbucket.org/fy24h/crm.git#refs/heads/master",
                            "href": "/httpAuth/app/rest/vcs-roots/id:Root_HttpsFy24hBitbucketOrgFy24hCrmGitRefsHeadsMaster"
                        },
                        "checkout-rules": ""
                    }
                ]
            },
            "parameters": {
                "href": "/app/rest/buildTypes/id:Crm_Compile/parameters",
                "property": [
                    {
                        "name": "system.test",
                        "value": "222"
                    },
                    {
                        "name": "testconfig",
                        "value": "121"
                    }
                ]
            },
            "steps": {
                "step": [
                    {
                        "id": "RUNNER_1",
                        "name": "build",
                        "type": "MSBuild",
                        "properties": {
                            "property": [
                                {
                                    "name": "build-file-path",
                                    "value": "src/Build Tools/CRM.proj"
                                },
                                {
                                    "name": "msbuild_version",
                                    "value": "14.0"
                                },
                                {
                                    "name": "run-platform",
                                    "value": "x86"
                                }
                            ]
                        }
                    }
                ]
            }
        };

        // $http.get('http://localhost:9000/httpAuth/app/rest/buildTypes');

        var teamcityAddr = "http://172.168.1.3:9000/httpAuth/app/rest/latest/buildTypes";
        var config = {
            headers: {
                'Authorization': 'Basic cGhvZW5peDowNTA5MTU='
            }
        };
        $http.post(teamcityAddr, buildConfigData, config).then(function (response) {
            vm.status = response.status;

        });


    }]);
