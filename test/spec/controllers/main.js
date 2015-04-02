'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('zyringApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have a list of 3 cities on the scope', function() {
    expect(scope.cities.length).toBe(3);
  });
});
