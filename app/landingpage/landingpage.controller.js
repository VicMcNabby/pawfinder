(function() {
  angular
    .module('pawfinder')
    .controller('LandingPageController', LandingPageController)

  function LandingPageController($http, PetService) {
    const vm = this
    const pawfinderURL = 'https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?key=a45d5fffa861665ba62810deb33f3fb7&animal=dog&format=json&count=24&location='
    vm.showButton = false;
    vm.showButton2 = false;
    vm.showButton3 = false;
    vm.showButton4 = false;
    vm.hide = false;
    vm.photo = false

    vm.getPets = function() {
      let zipcode = vm.zipcode
      vm.loading = true


      $http.get(`${pawfinderURL}${zipcode}`)
        .then(results => {
          console.log(results);
          vm.dogs = results.data.petfinder.pets.pet
          let dogs = vm.dogs
          vm.hide = true
          vm.showButton2 = true;
          vm.showButton3 = true;
          vm.showButton4 = true;
          vm.showButton = false;
          vm.loading = false;

          dogs.map(dog => {
            if (dog.media.photos) {
              dog.media.photos = dog.media.photos.photo[2].$t
            } else {
              dog.media.photos = 'http://www.waycooldogs.com/wp-content/uploads/2009/09/cat-dog-play.jpg'
            }
          })

        })
      vm.dogs = []
      vm.zipcode = ''

      vm.original = function() {
        $http.get(`${pawfinderURL}${zipcode}&offset=0`)
          .then(results => {
            console.log(results);
            vm.dogs = results.data.petfinder.pets.pet
            let dogs = vm.dogs
            vm.showButton2 = true;
            vm.showButton3 = true;
            vm.showButton4 = true;
            vm.showButton = false;

            dogs.map(dog => {
              if (dog.media.photos) {
                dog.media.photos = dog.media.photos.photo[2].$t
              } else {
                dog.media.photos = 'http://www.waycooldogs.com/wp-content/uploads/2009/09/cat-dog-play.jpg'
              }
            })

          })
      }

      vm.nextPage = function() {
        $http.get(`${pawfinderURL}${zipcode}&offset=24`)
          .then(results => {
            console.log(results);
            vm.dogs = results.data.petfinder.pets.pet
            let dogs = vm.dogs
            vm.showButton = true;
            vm.showButton3 = true;
            vm.showButton4 = true;
            vm.showButton2 = false;

            dogs.map(dog => {
              if (dog.media.photos) {
                dog.media.photos = dog.media.photos.photo[2].$t
              } else {
                dog.media.photos = 'http://www.waycooldogs.com/wp-content/uploads/2009/09/cat-dog-play.jpg'
              }
            })

          })
      }

      vm.nextPage2 = function() {
        $http.get(`${pawfinderURL}${zipcode}&offset=48`)
          .then(results => {
            console.log(results);
            vm.dogs = results.data.petfinder.pets.pet
            let dogs = vm.dogs
            vm.showButton = true;
            vm.showButton2 = true;
            vm.showButton4 = true;
            vm.showButton3 = false;

            dogs.map(dog => {
              if (dog.media.photos) {
                dog.media.photos = dog.media.photos.photo[2].$t
              } else {
                dog.media.photos = 'http://www.waycooldogs.com/wp-content/uploads/2009/09/cat-dog-play.jpg'
              }
            })

          })
      }

      vm.nextPage3 = function() {
        $http.get(`${pawfinderURL}${zipcode}&offset=72`)
          .then(results => {
            console.log(results);
            vm.dogs = results.data.petfinder.pets.pet
            let dogs = vm.dogs
            vm.showButton = true;
            vm.showButton2 = true;
            vm.showButton3 = true;
            vm.showButton4 = false;

            dogs.map(dog => {
              if (dog.media.photos) {
                dog.media.photos = dog.media.photos.photo[2].$t
              } else {
                dog.media.photos = 'http://www.waycooldogs.com/wp-content/uploads/2009/09/cat-dog-play.jpg'
              }
            })

          })
      }
    }
    vm.service = PetService

    vm.getInfo = function(dog) {
      dog.show = true
      console.log(dog);
    }

    vm.closeDogInfo = function(dog) {
      dog.show = false
      console.log('pushed');
    }
  }
}());
