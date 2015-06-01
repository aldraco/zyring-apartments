'use strict';
//var lodash = require('lodash');

/**
 */
angular.module('zyringApp')
	.controller('ApartmentCtrl', ['$scope', '$routeParams', 'ApartmentDataFactory', 'uiGmapGoogleMapApi',
		function ($scope, $routeParams, ApartmentDataFactory, uiGmapGoogleMapApi) {
		  	$scope.city = $routeParams.city_name;

		  	$scope.apartments = ["apartments", []];
		  	$scope.markers = ["markers", []];

		  	$scope.currentPage = 1;
		  	$scope.totalItems;
		  	$scope.maxSize = 9;

		  	$scope.map = { center: { latitude: 47.6, longitude: -122 }, zoom: 9 };

		  	uiGmapGoogleMapApi.then(function(maps) {

			  	ApartmentDataFactory.query({city_name: $scope.city}, function(apts) {
		  		// iterate through apts and place into sliced arrays of a certain size.
		  		$scope.totalItems = apts.length;
		  		var tempPage = $scope.currentPage;
		  		apts.forEach(function(value, index) {
		  			var pin = {
		  				latitude: value.latitude,
		  				longitude: value.longitude,
		  				idKey: value.id,
		  				title: value.title,
		  				thumbnail: value.thumbnail,
		  				price: value.price,
		  				show: false
		  			};

		  			pin.onClick = function() {
		  				pin.show = !pin.show;
		  			}


		  			if (index+1 <= (tempPage * $scope.maxSize)) {
		  				$scope.apartments[tempPage].push(value);
		  				$scope.markers[tempPage].push(pin);
		  			} else {
		  				tempPage++;
		  				$scope.apartments.push([]);
		  				$scope.markers.push([]);

		  				$scope.apartments[tempPage].push(value);
		  				$scope.markers[tempPage].push(pin);
		  			}
		  			
		  		});

		  	});

		  	

	  	});

  	}])
	.controller('SingleAptCtrl', ['$scope', '$routeParams', 'SingleAptFactory', function($scope, $routeParams, $SingleAptFactory) {
		$scope.apartment_id = $routeParams.apartment_id;
		$scope.aptInfo;
    $scope.showFeatures = true;
		$SingleAptFactory.get({apartment_id: $scope.apartment_id}, function(apt) {
			$scope.aptInfo = apt;
		});
	}]);