angular.module('app')
    .controller('taskListController', [
        '$scope',
        '$http',
        'taskFactory',
        function($scope, $http, taskFactory) {
            taskFactory.getAllTask.then(function(success) {
                $scope.taskList = success;
            }, function(error) {
                console.log(error);
            })
        }
    ])