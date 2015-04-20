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
  .config(function ($routeProvider) {
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
        templateUrl: 'views/partials/single-apartment.html',
        controller: 'SingleAptCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCF8CgwebS-YN4orKoLdxZhznUUH88Pge0',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
});
