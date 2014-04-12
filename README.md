## ng-highcharts [![Build Status](https://travis-ci.org/bielversallini/ng-highcharts.svg)](https://travis-ci.org/bielversallini/ng-highcharts)
Angular directive for Highcharts

> **WORK IN PROGRESS!** 

How to use
---------

**1) Adding the library:**
	
	<script src="ngHighcharts.min.js"></script>
	
**2) Injecting in your app:**
	
	angular.module('myApp',['ngHighcharts'])


**3) Now! Use the tag < highchart > anywhere:**
	
	<highchart type="column" data="arr"
               title="Movie Audience Measurement"
               subtitle="Source: PirateBay"
               y-title="Quantitative (MM)"
               categories="['Jan', 'Feb', 'Mar', 'Apr', 'May']">
    </highchart>
    
Only types column, bar, line, area and scatter are available.

**4) See!**

![image](https://raw.github.com/bielversallini/ng-highcharts/master/sample.png)


## License

[MIT License](http://bielversallini.mit-license.org/) © Gabriel Barbosa
