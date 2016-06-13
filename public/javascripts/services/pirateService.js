(function() {
'use strict';

angular
  .module('pirates')
  .factory('PirateService', PirateService);

  function PirateService($http) {
    let pirates = [];

    return {
      allPirates: function() {
          return $http.get('/pirates')
          .then(function(result) {
              pirates = result.data;
              return pirates;
          });
      },

      newPirate: function(nPirate) {
        return $http.post('/pirates', nPirate);
      },

      removePirate: function(id) {
        $http.delete('/pirates/' + id);
      },

      editPirate: function(nPirate) {
        $http.put('/pirates', nPirate);
      }
    }
  }
})();
