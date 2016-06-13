(function() {
  'use strict';

  angular
  .module('pirates', ['ngRoute'])
  .config(config);



  function config($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/pirates.html',
      controllerAs: 'pirate',
      controller: 'PiratesController'
    });

  }

})();
