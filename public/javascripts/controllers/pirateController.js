(function() {
'use strict';

angular
  .module('pirates')
  .controller("PiratesController", PiratesController);
  // .controller('NewPirateController', NewPirateController);


  function PiratesController (PirateService, $location) {
    var vm = this;
    vm.nameForm = false;
    vm.test = 'no';
    PirateService.allPirates().then(pirates => {
      vm.allPirates = pirates;
    });
    vm.addPirate = function(pirate) {
      PirateService.newPirate(pirate);
      vm.allPirates.push(pirate);
      vm.showForm = false;
    };
    vm.deletePirate = function(pirate) {
      vm.allPirates.splice(vm.allPirates.indexOf(pirate), 1);
      PirateService.removePirate(pirate.id);
    };
    vm.editPirate = function(pirate) {
      PirateService.editPirate(pirate);
    };
  };


})();
