var app = angular.module('socket-quiz');

app.controller('mainController', function($scope, $location, socket) {
    $scope.hans = function() {
        $scope.setRoute('/desktop/start');
    };

    $scope.setRoute = function(route) {
        $location.path(route);
    };

    $scope.securityCheck = function(successRoute) {
        console.log(playersArray[playerNumber]);

        if (playerNumber == undefined) {
            console.log('You ain\'t no host!');
            $scope.setRoute('/desktop/access-denied');
        } else if (playersArray[playerNumber].host == true) {
            console.log('Go ahead!');
            $scope.setRoute('/desktop/' + successRoute);
        } else {
            console.log('You ain\'t no host!');
            $scope.setRoute('/desktop/access-denied');
        }
    };
});

app.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);
