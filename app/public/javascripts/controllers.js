/**
 * Created by Sander on 05/04/16.
 */
var app = angular.module('socket-quiz');

app.controller('mainController', function($scope, socket) {
    $scope.newCustomers = [];
    $scope.currentCustomer = {};
});