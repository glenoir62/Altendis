'use strict';

angular.module('AltendisApp')
  .controller('AccueilCtrl', function ($scope) {
		$scope.infos = [
			{'date':'10 Juin 2013',
			'content':' Liferay 6.1 Thèmes (Paris)'},
			{'date':'11 au 12 Juin 2013',
			'content':'Liferay 6.1 Administration Portail (Paris)'},
			{'date':'13 au 14 Juin 2013',
			'content':'Liferay 6.1 Création de contenu (Paris)'},
			{'date':'17 au 19 Juin 2013',
			'content':'Liferay 6.1 Développement (Paris)'}
		];
	});
