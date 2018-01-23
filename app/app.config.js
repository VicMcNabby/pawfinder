(function() {

  angular
    .module('pawfinder')
    .config(config)

  function config($stateProvider, $locationProvider, $urlServiceProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
      .state('home', {
        url: '/',
        component: 'landingpage'
      }).state('petpage', {
        url: '/petpage',
        component: 'petpage'
      })

    $urlServiceProvider.rules.otherwise({
      state: 'home'
    })
  }

}());
