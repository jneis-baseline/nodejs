// creates a new module with no deps
angular.module('finance', [])

	// creates a new service with a dep from core
	.factory('currencyConverter', ['$http', function($http) {
		
		var YAHOO_URL = '//query.yahooapis.com/v1/public/yql?q=' +
			'select * from yahoo.finance.xchange where pair in ("PAIRS")' +
			'&format=json' +
			'&env=store://datatables.org/alltableswithkeys' +
			'&callback=JSON_CALLBACK'

		var currencies = ['USD', 'EUR', 'CNY'];

		var rates = {
			USD: 1,
			EUR: 0.74,
			CNY: 6.09
		};

		var convert = function(amount, from, to) {
			return amount * rates[from] / rates[to];
		};

		var refresh = function() {
			var url = YAHOO_URL.replace('PAIRS', 'USD' + currencies.join('","USD'));

			return $http.jsonp(url).success(function(data) {
				var newRates = [];
				angular.forEach(data.query.results.rate, function(rate) {
					var currency = rate.id.substring(3, 6);
					newRates[currency] = window.parseFloat(rate.Rate);
				});
				rates = newRates;
			});
		};

		refresh();

		// obj exposed by this service
		return {
			currencies: currencies,
			convert: convert
		};

	}]);