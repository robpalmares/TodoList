angular.module('app')
    .controller('taskUploadController', [
        '$scope',
        '$http',
        function($scope, $http) {
            $scope.task = "";
            $scope.save = function() {
                if($scope.task === "") {
                    console.error("Request Error: Cannot process request")
                } else {
                    $http.post('api/v1/tasks/', { task: $scope.task }).then(function(success) {
                        $scope.task = "";
                    }, function(error) {
                        console.log(error);
                    })
                }
            }
        }
    ])