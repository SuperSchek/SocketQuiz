/**
 * Created by Sander on 05/04/16.
 */
var app = angular.module('socket-quiz');

app.controller('mainController', function($scope, $location, socket) {
    $scope.newCustomers = [];
    $scope.currentCustomer = {};

    $scope.setRoute = function ( route) {
        $location.path(route);
    };

});

var lobby = angular.module('lobby');

lobby.config('$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/desktop/lobby', {templateUrl: 'partials/desktop/lobby.html'})
});
