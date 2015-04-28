'use strict';

/**
 * @ngdoc overview
 * @name zyringApp
 * @description
 * # zyringApp
 *
 * Main module of the application.
 */
angular
  .module('zyringApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ui.bootstrap',
    'wu.masonry',
    'uiGmapgoogle-maps'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/cities/:city_name', {
        templateUrl: 'views/show-apartments.html',
        controller: 'ApartmentCtrl'
      })
      .when('/apartments/:apartment_id', {
        templateUrl: 'views/single-apartment.html',
        controller: 'SingleAptCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .config(["uiGmapGoogleMapApiProvider", function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCF8CgwebS-YN4orKoLdxZhznUUH88Pge0',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
}]);

'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zyringApp
 */
angular.module('zyringApp')
  .controller('MainCtrl', ["$scope", function ($scope) {

    $scope.cities = [
    {name: 'Seattle', image: 'images/spaceNeedle.jpg', ptext: 'Seattle, the coffee capital of the West Coast, offers beautiful natural scenery as well as modern city life.'},
    {name: 'Tacoma', image: 'images/tacomaHeader.jpg', ptext: 'Mount Ranier and access to Seattle - the best of city and country.'},
    {name: 'Bellevue', image: 'images/bellevue.jpg', ptext: 'Bellevue. Right next to Seattle, without being right in the middle of the city.'}
    ];

    



  }]);

'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the zyringApp
 */
angular.module('zyringApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {

  }]);

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
		$SingleAptFactory.get({apartment_id: $scope.apartment_id}, function(apt) {
			$scope.aptInfo = apt;
		});
	}]);
// navigation controller

angular.module('zyringApp')
	.controller('NavigationController', ['$rootScope', function($rootScope) {
		//$rootScope.activeTab = $rootScope.tabs[]

		$rootScope.tabs = [
			{link: '', name: 'Apartments'},
			{link: 'about', name: 'About Project'},
			{link: 'contact', name: 'About Me'}
			];

			


	}]);
'use strict';

angular.module('zyringApp')
.factory('ApartmentDataFactory', [ '$resource',
	function($resource){
			return $resource('http://spidey.zyring.com/cities/:city_name');
		}])
.factory('SingleAptFactory', [ '$resource', 
	function($resource) {
		return $resource('http://spidey.zyring.com/apartments/:apartment_id');
	}]);
angular.module('zyringApp')
	.directive('singleApartment', [function() {
		return {
			restrict: 'E',
			templateUrl: 'views/templates/apartment.html',
			replace: true
		}
	}]);