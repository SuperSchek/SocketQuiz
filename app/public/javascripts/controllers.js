var app = angular.module('socket-quiz');

app.controller('mainController', function($scope, $location, socket) {
    $scope.setRoute = function(route) {
        $location.path(route);
    };

});

app.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);
