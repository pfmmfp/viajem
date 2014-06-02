'use strict';

// Setting up route
angular.module('regions').config(['$stateProvider',
	function($stateProvider) {
		// Regions state routing
		$stateProvider.
		state('listRegionsAdmin', {
			url: '/admin/regions',
			templateUrl: 'modules/regions/views/admin/list-regions.client.view.html'
		}).
		state('createRegionAdmin', {
			url: '/admin/regions/create',
			templateUrl: 'modules/regions/views/admin/create-region.client.view.html'
		}).
		state('createRegionModalAdmin', {
			url: '/admin/regions/modal',
			templateUrl: 'modules/regions/views/admin/modal.region.client.view.html'
		}).
		state('viewRegionAdmin', {
			url: '/admin/regions/:regionId',
			templateUrl: 'modules/regions/views/admin/view-region.client.view.html'
		}).
		state('editRegionAdmin', {
			url: '/admin/regions/:regionId/edit',
			templateUrl: 'modules/regions/views/admin/edit-region.client.view.html'
		}).
		state('listRegionsPublic', {
			url: '/regions',
			templateUrl: 'modules/regions/views/public/list-regions.client.view.html'
		}).
		state('viewRegionPublic', {
			url: '/regions/:regionId',
			templateUrl: 'modules/regions/views/public/view-region.client.view.html'
		})
		;
	}
]);