'use strict';
//var lodash = require('lodash');

/**
 */
angular.module('zyringApp')
	.controller('ApartmentCtrl', ['$scope', '$routeParams', 'ApartmentDataFactory', 
		function ($scope, $routeParams, ApartmentDataFactory) {
		  	$scope.city = $routeParams.city_name;
		  	$scope.apartments = ["apartments", []];
		  	$scope.currentPage = 1;
		  	$scope.totalItems;

		  	ApartmentDataFactory.query({city_name: $scope.city}, function(apts) {
		  		// iterate through apts and place into sliced arrays of a certain size.
		  		$scope.totalItems = apts.length;
		  		var tempPage = $scope.currentPage;
		  		apts.forEach(function(value, index) {
		  			if (index+1 <= (tempPage * $scope.maxSize)) {
		  				$scope.apartments[tempPage].push(value);
		  			} else {
		  				tempPage++;
		  				$scope.apartments.push([]);
		  				$scope.apartments[tempPage].push(value)
		  			}
		  			
		  		});




		  		//$scope.apartments = apts;
		  	});

		  	$scope.setPage = function (newPage) {
		  		$scope.currentPage = newPage;
		  	};

		  	$scope.maxSize = 9;

		  	
	  	}
	  ])
	.controller('SingleAptCtrl', ['$scope', '$routeParams', 'SingleAptFactory', function($scope, $routeParams, $SingleAptFactory) {
		$scope.apartment_id = $routeParams.apartment_id;
		$scope.aptInfo;
		$SingleAptFactory.get({apartment_id: $scope.apartment_id}, function(apt) {
			$scope.aptInfo = apt;
		});
	}]);