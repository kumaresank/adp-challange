'use strict';
angular.module('adpApp.components.home', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/components/home/home.html',
            controller: 'HomeCtrl'
        });
    }])
    .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get("http://localhost:3000/api")
            .then(function(response) {
                $scope.battles = response.data;
            });
    }])