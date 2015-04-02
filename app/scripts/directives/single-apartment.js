angular.module('zyringApp')
	.directive('singleApartment', [function() {
		return {
			restrict: 'E',
			templateUrl: 'views/partials/apartment.html',
			scope: {
				article: '@'
			}
		}
		
	}]);