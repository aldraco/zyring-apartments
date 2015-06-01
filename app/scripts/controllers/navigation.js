// navigation controller

angular.module('zyringApp')
	.controller('NavigationController', ['$rootScope', function($rootScope) {
		//$rootScope.activeTab = $rootScope.tabs[]

		$rootScope.tabs = [
			{link: '', name: 'Find an Apartment'},
			{link: 'about', name: 'About Project'},
			{link: 'contact', name: 'About Me'}
			];

			


	}]);