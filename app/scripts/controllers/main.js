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
    {name: 'Tacoma', image: 'http://upload.wikimedia.org/wikipedia/commons/e/e2/Rainier_Port.JPG', ptext: "Mount Ranier and access to Seattle - the best of city and country."},
    {name: 'Bellevue', image: 'http://media-cdn.tripadvisor.com/media/photo-s/01/d7/66/43/downtown-bellevue-skyline.jpg', ptext: 'Bellevue. Right next to Seattle, without being right in the middle of the city.'}
    ];

    $scope.myInterval = 5000;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    var newWidth = 600 + slides.length + 1;
	    slides.push({
	      image: 'http://placekitten.com/' + newWidth + '/300',
	      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
	        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
	    });
	  };
	  for (var i=0; i<4; i++) {
	    $scope.addSlide();
	  }


  });
