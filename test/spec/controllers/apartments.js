'use strict';

describe('Controller: ApartmentsCtrl', function() {
	beforeEach(module('zyringApp'));

	var ApartmentsCtrl, scope;

	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope.new();
		ApartmentsCtrl = $controller('ApartmentsCtrl', {
			$scope: scope;
		});
	}));

	it('should have a list of apartments from the server', function() {
		expect(scope.apartments.length).not.toBe(0);
	});

	it('should have the apartments paginated', function() {
		expect(scope.pages.length).toBeGreaterThan(scope.apartments.length/9);
	})
});