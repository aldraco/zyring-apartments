angular.module('zyringApp')
	.directive('singleApartment', [function() {
		return {
			restrict: 'E',
			templateUrl: 'views/templates/apartment.html',
			replace: true
		}
	}]);