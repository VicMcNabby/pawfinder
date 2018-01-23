(function() {

  angular
    .module('pawfinder')
    .factory('PetService', PetService)


  function PetService() {
    return {
      petId: 37586049
    }
  }

})();
