angular.module('ngHighcharts', []);
angular.module('ngHighcharts').directive('highchart', function($log, highchart) {
    return {
        restrict: 'ACE',
        replace: true,
        template: '<div></div>',
        scope: {
            data: '=',
            options: '='
        },
        link: function(scope, element, attrs) {

            var type = 'line';
            var title = '';
            var subtitle = '';
            var xAxisTitle = '';
            var yAxisTitle = '';
            var xAxisCategories = null;
            var height = 600;

            if (attrs.type) {
                type = attrs.type.toLowerCase();
            }
            if (attrs.title) {
                title = attrs.title;
            }
            if (attrs.subtitle) {
                subtitle = attrs.subtitle;
            }
            if (attrs.xTitle) {
                xAxisTitle = attrs.xTitle;
            }
            if (attrs.yTitle) {
                yAxisTitle = attrs.yTitle;
            }
            if (attrs.categories) {
                xAxisCategories = attrs.categories;
            }
            if (attrs.height) {
                height = eval(attrs.height);
            }

            var chartOptions = highchart.defaultOptions();
            if (scope.options) {
                chartOptions = scope.options;
            }
            if (chartOptions) {
                chartOptions.chart.type = type;
                chartOptions.title.text = title;
                chartOptions.subtitle.text = subtitle;
                chartOptions.xAxis.title.text = xAxisTitle;
                chartOptions.yAxis.title.text = yAxisTitle;
                chartOptions.xAxis.categories = eval(xAxisCategories);
                chartOptions.chart.height = height;
            }

            scope.$watch('data', function(val) {
                if (chartOptions && chartOptions.series) {
                    chartOptions.series = val;
                    element.highcharts(chartOptions);
                }
            });

        }
    }
});

angular.module('ngHighcharts').factory('highchart', function() {
    return {
        defaultOptions: function() {
            return {
                chart: {
                    animation: true,
                    type: 'line'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                credits: {
                    enabled: false
                },
                legend: {
                    labelFormat: '{name}'
                },
                series: [],
                xAxis: {
                    categories: [],
                    title: {
                        text: 'sdsadsadsad'
                    },
                },
                yAxis: {
                    categories: null,
                    title: {
                        text: ''
                    }
                }
            }
        }
    }
});