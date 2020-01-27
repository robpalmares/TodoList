(function() {
    angular.module('app')
        .factory('taskFactory', [
            '$http',
            function($http) {
                var resource = {};
                resource.getAllTask = $http.get('api/v1/tasks')
                    .then(function(res) {
                        return res.data;
                    });
                return resource;
            }
        ]);
})();