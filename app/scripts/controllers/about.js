'use strict';

/**
 * @ngdoc function
 * @name learnYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the learnYeomanApp
 */
angular.module('learnYeomanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
