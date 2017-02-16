'use strict';
angular.module('adpApp', ['ngRoute', 'ngMaterial', 'adpApp.components.home'])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true)
    }]);