var app = angular.module('mySample', ['ngHighcharts']);

app.controller('mainController', function($scope) {

    var data = function() {
        return [{
            name: 'Netflix',
            period: 'JAN',
            value: 48
        }, {
            name: 'Popcorn Time',
            period: 'JAN',
            value: 20
        }, {
            name: 'HBO',
            period: 'JAN',
            value: 80
        }, {
            name: 'Telecine',
            period: 'JAN',
            value: 78
        }, {
            name: 'Netflix',
            period: 'FEV',
            value: 38
        }, {
            name: 'Popcorn Time',
            period: 'FEV',
            value: 48
        }, {
            name: 'HBO',
            period: 'FEV',
            value: 50
        }, {
            name: 'Telecine',
            period: 'FEV',
            value: 48
        }, {
            name: 'Netflix',
            period: 'MAR',
            value: 57
        }, {
            name: 'Popcorn Time',
            period: 'MAR',
            value: 69
        }, {
            name: 'HBO',
            period: 'MAR',
            value: 50
        }, {
            name: 'Telecine',
            period: 'MAR',
            value: 48
        }, {
            name: 'Netflix',
            period: 'ABR',
            value: 78
        }, {
            name: 'Popcorn Time',
            period: 'ABR',
            value: 76
        }, {
            name: 'HBO',
            period: 'ABR',
            value: 58
        }, {
            name: 'Telecine',
            period: 'ABR',
            value: 48
        }];
    }

    $scope.arr = new data();
});