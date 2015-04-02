'use strict';

/**
 */
angular.module('zyringApp')
	.controller('ApartmentCtrl', ['$scope', '$routeParams', 'ApartmentDataFactory', 
		function ($scope, $routeParams, ApartmentDataFactory) {
		  	$scope.city = $routeParams.city_name;
		  	$scope.apartments = {};

		  	ApartmentDataFactory.query({city_name: $scope.city}, function(apts) {
		  		$scope.apartments = apts;
		  	});
		  	console.log("parent controller scope: "+$scope.$parent.currentPage);
		  	
	  	}
	  ]);