var socketQuiz = angular.module('socket-quiz', []);

socketQuiz.controller('desktopController', function($scope) {
    $scope.first = 4;
    $scope.second = 1;

    $scope.updateValue = function() {
        $scope.calculation = $scope.first + ' + ' + $scope.second +
            " = " + (+$scope.first + +$scope.second);
    };
});