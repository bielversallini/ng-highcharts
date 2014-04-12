var app = angular.module('mySample', ['ngHighcharts']);

app.controller('mainController', function($scope) {
    var data = function() {
        return [{
            name: 'Netflix',
            data: [7.0, 6.9, 9.5, 14.5]
        }, {
            name: 'Popcorn Time',
            data: [0.8, 5.7, 11.3, 17.0]
        }, {
            name: 'HBO',
            data: [0.6, 3.5, 8.4, 13.5, 17.0]
        }, {
            name: 'Telecine',
            data: [3.9, 4.2, 5.7, 8.5, 11.9]
        }];
    }
    $scope.arr = new data();
});