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
      }).state('search', {
        url: '/search',
        component: 'search'
      })

    $urlServiceProvider.rules.otherwise({
      state: 'home'
    })
  }

}());
