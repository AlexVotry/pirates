(function() {
  'use strict';

  angular
  .module('pirates', [])
  .controller("PiratesController", PiratesController);

  function PiratesController ($scope) {
    $scope.mv = {};
    $scope.mv.num = 42;
    console.log($scope.mv.num);
  };


})();
