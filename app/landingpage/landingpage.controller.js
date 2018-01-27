(function() {
  angular
    .module('pawfinder')
    .controller('LandingPageController', LandingPageController)

  function LandingPageController($http) {
    const vm = this
    const pawfinderURL = 'https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?key=a45d5fffa861665ba62810deb33f3fb7&format=json&count=25&location='
    vm.showButton = false;
    vm.showButton2 = false;
    vm.showButton3 = false;
    vm.showButton4 = false;
    vm.showButtonActive = false;
    vm.showButton2Active = false;
    vm.showButton3Active = false;
    vm.showButton4Active = false;
    vm.hide = false;
    vm.options = false;
    vm.errorMessage = false;


    vm.getPets = function(value) {
      let zipcode = vm.zipcode
      let size = vm.size
      if (size == null) {
        size = ''
      }
      let pet = value
      let sex = vm.sex;
      if (sex == null) {
        sex = ''
      }
      let age = vm.age
      if (age == null) {
        age = ''
      }
      const numbers = /^[0-9]+$/;

      if ((zipcode) && (zipcode.length == 5) && zipcode.match(numbers)) {
        vm.errorMessage = false;

        vm.options = false;

        console.log(sex);
        console.log(age);
        vm.loading = true
        vm.hideAll = true
        $http.get(`${pawfinderURL}${zipcode}&animal=${pet}&sex=${sex}&age=${age}&size=${size}`)
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
      } else {
        vm.errorMessage = true;
        vm.hideAll = true;
      }
      vm.dogs = [];
      vm.zipcode = '';
      vm.age = '';
      vm.sex = '';
      vm.size = '';

      vm.original = function() {
        vm.loading = true
        $http.get(`${pawfinderURL}${zipcode}&animal=${pet}&sex=${sex}&age=${age}&size=${size}&offset=0`)
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
        $http.get(`${pawfinderURL}${zipcode}&animal=${pet}&sex=${sex}&age=${age}&size=${size}&offset=25`)
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
        $http.get(`${pawfinderURL}${zipcode}&animal=${pet}&sex=${sex}&age=${age}&size=${size}&offset=50`)
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
        $http.get(`${pawfinderURL}${zipcode}&animal=${pet}&sex=${sex}&age=${age}&size=${size}&offset=75`)
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

    vm.resetOptions = function() {
      vm.age = '';
      vm.sex = '';
      vm.size = '';
    }


    vm.reload = function() {
      window.location.reload()
    }

    vm.openOptions = function() {
      vm.options = true;
    }

    vm.closeOptions = function() {
      vm.options = false;
    }

    vm.getInfo = function(dog) {
      dog.show = true;
      console.log(dog);
    }

    vm.closePetInfo = function(dog) {
      dog.show = false;
    }

  }
}());
