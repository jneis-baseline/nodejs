// invoice module has a dep on finance module
angular.module('invoice', ['finance'])
	
	// controller depends on a service from finance module
	.controller('InvoiceController', ['currencyConverter', function(converter) {

		this.qty = 1;
		this.cost = 2;

		this.from = 'EUR';
		this.currencies = converter.currencies;

		this.total = function(to) {
			return converter.convert(this.qty * this.cost, this.from, to);
		};

		this.pay = function() {
			window.alert('Thanks!');
		};

	}]);