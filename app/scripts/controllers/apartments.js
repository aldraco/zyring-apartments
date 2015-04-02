'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zyringApp
 */
angular.module('zyringApp')
	.controller('ApartmentCtrl', ['$scope', '$routeParams', 'ApartmentDataFactory', 
		function ($scope, $routeParams, ApartmentDataFactory) {
		  	$scope.city = $routeParams.city_name;
		  	$scope.apartments = {};

		  	ApartmentDataFactory.query({city_name: $scope.city}, function(apts) {
		  		$scope.apartments = apts;
		  	});
		  	
	  	}
	  ]);