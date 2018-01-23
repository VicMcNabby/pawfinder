(function() {
  angular
    .module('pawfinder')
    .controller('PetPageController', PetPageController)

  function PetPageController($http, PetService) {
    const vm = this
    const petURL = 'https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.get?key=a45d5fffa861665ba62810deb33f3fb7&format=json&id='

    vm.$onInit = function() {

      vm.service = PetService
      vm.updatePetId = updatePetId

      function updatePetId() {
        vm.service.petId = vm.petId
      }

      let petId = vm.service.petId

      $http.get(`${petURL}${petId}`)
        .then(results => {
          console.log(results.data);
          vm.pets = results.data.petfinder.pet


        })
      vm.pets = []
    }
  }
}());
