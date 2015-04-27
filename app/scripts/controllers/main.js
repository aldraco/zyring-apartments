'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zyringApp
 */
angular.module('zyringApp')
  .controller('MainCtrl', function ($scope) {

    $scope.cities = [
    {name: 'Seattle', image: 'images/spaceNeedle.jpg', ptext: 'Seattle, the coffee capital of the West Coast, offers beautiful natural scenery as well as modern city life.'},
    {name: 'Tacoma', image: 'images/tacomaHeader.JPG', ptext: 'Mount Ranier and access to Seattle - the best of city and country.'},
    {name: 'Bellevue', image: 'images/bellevue.jpg', ptext: 'Bellevue. Right next to Seattle, without being right in the middle of the city.'}
    ];

    



  });
