'use strict';

/**
 * @ngdoc function
 * @name learnYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learnYeomanApp
 */
angular.module('learnYeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
