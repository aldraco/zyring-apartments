angular.module('zyringApp')
	.directive('singleApartment', [function() {
		return {
			restrict: 'E',
			templateUrl: 'views/partials/apartment.html',
			scope: {
				title: '@',
				city: '@',
				price: '@',
				floorplan: '@',
				features: '@',
				street: '@', 
				city: '@', 
				region: '@',
				zip: '@', 
				contact: '@'
				//apartment: '@'
			}
		}
		
	}]);