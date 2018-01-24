(function() {
  angular
    .module('pawfinder')
    .controller('LandingPageController', LandingPageController)

  function LandingPageController($http) {
    const vm = this
    const pawfinderURL = 'https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?key=a45d5fffa861665ba62810deb33f3fb7&format=json&count=25&location='
    let cats = '&animal=cat'
    let doggy = '&animal=dog'
    vm.showButton = false;
    vm.showButton2 = false;
    vm.showButton3 = false;
    vm.showButton4 = false;
    vm.showButtonActive = false;
    vm.showButton2Active = false;
    vm.showButton3Active = false;
    vm.showButton4Active = false;
    vm.hide = false;


    ////////////////// FIND DOGS ////////////////////
    vm.getDogs = function() {
      let zipcode = vm.zipcode
      vm.loading = true
      vm.hideAll = true

      $http.get(`${pawfinderURL}${zipcode}${doggy}`)
        .then(results => {
          console.log(results);
          vm.dogs = results.data.petfinder.pets.pet
          let dogs = vm.dogs

          vm.showButton2 = true;
          vm.showButton3 = true;
          vm.showButton4 = true;
          vm.showButton = false;
          vm.showButtonActive = true;
          vm.showButton2Active = false;
          vm.showButton3Active = false;
          vm.showButton4Active = false;
          vm.loading = false;
          vm.hide = true;
          vm.hideAll = false

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
        vm.loading = true
        $http.get(`${pawfinderURL}${zipcode}${doggy}&offset=0`)
          .then(results => {
            console.log(results);
            vm.dogs = results.data.petfinder.pets.pet
            let dogs = vm.dogs
            vm.showButton2 = true;
            vm.showButton3 = true;
            vm.showButton4 = true;
            vm.showButton = false;
            vm.showButtonActive = true;
            vm.showButton2Active = false;
            vm.showButton3Active = false;
            vm.showButton4Active = false;
            vm.loading = false;
            vm.hide = true;

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
        vm.loading = true
        $http.get(`${pawfinderURL}${zipcode}${doggy}&offset=25`)
          .then(results => {
            console.log(results);
            vm.dogs = results.data.petfinder.pets.pet
            let dogs = vm.dogs
            vm.showButton = true;
            vm.showButton3 = true;
            vm.showButton4 = true;
            vm.showButton2 = false;
            vm.showButtonActive = false;
            vm.showButton2Active = true;
            vm.showButton3Active = false;
            vm.showButton4Active = false;
            vm.loading = false;
            vm.hide = true;

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
        vm.loading = true
        $http.get(`${pawfinderURL}${zipcode}${doggy}&offset=50`)
          .then(results => {
            console.log(results);
            vm.dogs = results.data.petfinder.pets.pet
            let dogs = vm.dogs
            vm.showButton = true;
            vm.showButton2 = true;
            vm.showButton4 = true;
            vm.showButton3 = false;
            vm.showButtonActive = false;
            vm.showButton2Active = false;
            vm.showButton3Active = true;
            vm.showButton4Active = false;
            vm.loading = false;
            vm.hide = true;

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
        vm.loading = true
        $http.get(`${pawfinderURL}${zipcode}${doggy}&offset=75`)
          .then(results => {
            console.log(results);
            vm.dogs = results.data.petfinder.pets.pet
            let dogs = vm.dogs
            vm.showButton = true;
            vm.showButton2 = true;
            vm.showButton3 = true;
            vm.showButton4 = false;
            vm.showButtonActive = false;
            vm.showButton2Active = false;
            vm.showButton3Active = false;
            vm.showButton4Active = true;
            vm.loading = false;
            vm.hide = true;

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

    ////////////////// FIND CATS ////////////////////
    vm.getCats = function() {
      let zipcode = vm.zipcode
      vm.loading = true
      vm.hideAll = true

      $http.get(`${pawfinderURL}${zipcode}${cats}`)
        .then(results => {
          console.log(results);
          vm.dogs = results.data.petfinder.pets.pet
          let dogs = vm.dogs

          vm.showButton2 = true;
          vm.showButton3 = true;
          vm.showButton4 = true;
          vm.showButton = false;
          vm.showButtonActive = true;
          vm.showButton2Active = false;
          vm.showButton3Active = false;
          vm.showButton4Active = false;
          vm.loading = false;
          vm.hide = true;
          vm.hideAll = false

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
        vm.loading = true
        $http.get(`${pawfinderURL}${zipcode}${cats}&offset=0`)
          .then(results => {
            console.log(results);
            vm.dogs = results.data.petfinder.pets.pet
            let dogs = vm.dogs
            vm.showButton2 = true;
            vm.showButton3 = true;
            vm.showButton4 = true;
            vm.showButton = false;
            vm.showButtonActive = true;
            vm.showButton2Active = false;
            vm.showButton3Active = false;
            vm.showButton4Active = false;
            vm.loading = false;
            vm.hide = true;

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
        vm.loading = true
        $http.get(`${pawfinderURL}${zipcode}${cats}&offset=25`)
          .then(results => {
            console.log(results);
            vm.dogs = results.data.petfinder.pets.pet
            let dogs = vm.dogs
            vm.showButton = true;
            vm.showButton3 = true;
            vm.showButton4 = true;
            vm.showButton2 = false;
            vm.showButtonActive = false;
            vm.showButton2Active = true;
            vm.showButton3Active = false;
            vm.showButton4Active = false;
            vm.loading = false;
            vm.hide = true;

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
        vm.loading = true
        $http.get(`${pawfinderURL}${zipcode}${cats}&offset=50`)
          .then(results => {
            console.log(results);
            vm.dogs = results.data.petfinder.pets.pet
            let dogs = vm.dogs
            vm.showButton = true;
            vm.showButton2 = true;
            vm.showButton4 = true;
            vm.showButton3 = false;
            vm.showButtonActive = false;
            vm.showButton2Active = false;
            vm.showButton3Active = true;
            vm.showButton4Active = false;
            vm.loading = false;
            vm.hide = true;

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
        vm.loading = true
        $http.get(`${pawfinderURL}${zipcode}${cats}&offset=75`)
          .then(results => {
            console.log(results);
            vm.dogs = results.data.petfinder.pets.pet
            let dogs = vm.dogs
            vm.showButton = true;
            vm.showButton2 = true;
            vm.showButton3 = true;
            vm.showButton4 = false;
            vm.showButtonActive = false;
            vm.showButton2Active = false;
            vm.showButton3Active = false;
            vm.showButton4Active = true;
            vm.loading = false;
            vm.hide = true;

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
    ////////////////////////////// END FIND CATS ///////////////////////////////


    vm.getInfo = function(dog) {
      dog.show = true
      console.log(dog);
    }

    vm.closePetInfo = function(dog) {
      dog.show = false
    }
  }
}());
