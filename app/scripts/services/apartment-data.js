'use strict';

angular.module('zyringApp').factory('ApartmentDataFactory', [ '$resource',
	function($resource){
			return $resource('http://spidey.zyring.com/cities/:city_name');
		}]);