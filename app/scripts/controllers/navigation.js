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