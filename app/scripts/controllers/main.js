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
    {name: 'Seattle', image: 'http://upload.wikimedia.org/wikipedia/commons/2/2f/Space_Needle002.jpg', ptext: 'Seattle, the coffee capital of the West Coast, offers beautiful natural scenery as well as modern city life.'},
    {name: 'Redmond', image: 'http://upload.wikimedia.org/wikipedia/commons/1/16/Bicycle_Capital_of_the_Northwest.JPG', ptext: "Have Microsoft in your backyard. Fulfill your startup dreams, or start a dream job."},
    {name: 'Bellevue', image: 'http://media-cdn.tripadvisor.com/media/photo-s/01/d7/66/43/downtown-bellevue-skyline.jpg', ptext: 'Bellevue. Right next to Seattle, without being right in the middle of the city.'}
    ];


  });
