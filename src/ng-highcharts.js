(function() {
    'use strict';
    angular.module('ngHighcharts', []);
    angular.module('ngHighcharts').directive('highchart', function(highchart) {
        return {
            restrict: 'AE',
            replace: true,
            template: '<div></div>',
            scope: {
                data: '=',
                options: '=',
                legendFormatter: '&',
                tooltipFormatter: '&'
            },
            link: function(scope, element, attrs) {

                var chartOptions = {};
                var xAxisCategories = [];
                var series = [];

                if (attrs.categories)
                    xAxisCategories = attrs.categories;

                angular.extend(chartOptions, highchart.defaultOptions(), scope.options);
                if (chartOptions) {

                    if (attrs.type)
                        chartOptions.chart.type = attrs.type.toLowerCase();
                    if (attrs.title)
                        chartOptions.title.text = attrs.title;
                    if (attrs.subtitle)
                        chartOptions.subtitle.text = attrs.subtitle;
                    if (attrs.xAxisTitle)
                        chartOptions.xAxis.title.text = attrs.xAxisTitle;
                    if (attrs.yAxisTitle)
                        chartOptions.yAxis.title.text = attrs.yAxisTitle;

                    if (!isNaN(attrs.height))
                        chartOptions.chart.height = Number(attrs.height);

                    if (!isNaN(attrs.xInterval))
                        chartOptions.xAxis.tickInterval = Number(attrs.xInterval);
                    if (!isNaN(attrs.xMin))
                        chartOptions.xAxis.min = Number(attrs.xMin);
                    if (!isNaN(attrs.xMax))
                        chartOptions.xAxis.max = Number(attrs.xMax);

                    if (!isNaN(attrs.yInterval))
                        chartOptions.yAxis.tickInterval = Number(attrs.yInterval);
                    if (!isNaN(attrs.yMin))
                        chartOptions.yAxis.min = Number(attrs.yMin);
                    if (!isNaN(attrs.yMax))
                        chartOptions.yAxis.max = Number(attrs.yMax);

                    if ('legendFormatter' in attrs) {
                        chartOptions.legend.labelFormatter = scope.legendFormatter();
                        delete chartOptions.legend.labelFormat;
                    }

                    if ('tooltipFormatter' in attrs) {
                        chartOptions.tooltip.formatter = scope.tooltipFormatter();
                    }
                }

                scope.$watch('data', function(val, old) {
                    var temp = [];

                    if (old.length > 0) {
                        xAxisCategories = [];
                        series = [];
                    }

                    for (var i = 0; i < val.length; i++) {
                        // Building categories
                        var item = val[i][attrs.categoryField];
                        if (xAxisCategories.length === 0 || xAxisCategories.indexOf(item) < 0) {
                            xAxisCategories.push(item);
                        }

                        // Building series
                        var obj = {};
                        obj.name = angular.isDefined(val[i][attrs.displayName]) ? val[i][attrs.displayName] : attrs.displayName;
                        obj.data = [];
                        obj.color = attrs.color;

                        for (var j = 0; j < val.length; j++) {
                            if (obj.name === (angular.isDefined(val[j][attrs.displayName]) ? val[j][attrs.displayName] : attrs.displayName)) {
                                var value = {};
                                value.y = val[j][attrs.yField];
                                obj.data.push(value);
                            }
                        }
                        
                        if (series.length === 0 || temp.indexOf(obj.name) < 0) {
                            temp.push(obj.name);
                            series.push(obj);
                        }
                    }

                    chartOptions.xAxis.categories = xAxisCategories;
                    if (chartOptions && chartOptions.series) {
                        chartOptions.series = series;
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
                        type: 'line',
                        height: 450
                    },
                    title: {
                        text: ''
                    },
                    tooltip: {

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
                        min: null,
                        max: null,
                        tickInterval: null,
                        title: {
                            text: ''
                        }
                    },
                    yAxis: {
                        categories: null,
                        min: null,
                        max: null,
                        tickInterval: null,
                        title: {
                            text: ''
                        }
                    }
                };
            }
        }
    });
})();
