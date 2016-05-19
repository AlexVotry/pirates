(function() {
  'use strict';

  angular
  .module('pirates', ['ngRoute'])
  .controller("PiratesController", PiratesController)
  .config(config);

  function PiratesController () {
    var mv = this;
    mv.num = 42;
    console.log(mv.num);
  };

  function config($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/pirates.html',
      controllerAs: 'pirate',
      controller: 'PiratesController'
    });

  }

})();
