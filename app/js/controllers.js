'use strict';

var rugratApp = angular.module('rugratApp', []);

rugratApp.controller('RugratListCtrl', function($scope, $http){
  $http.get('rugrats/rugrats.json').success(function(data) {
    $scope.rugrats = data;
  });

}); 