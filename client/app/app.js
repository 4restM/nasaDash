angular.module('nasadash', [
  'nasadash.dash',
  'nasadash.services',
  'ngRoute'
])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/dash/dash.html',
      controller: 'DashController'
    })
    // .otherwise({
    //   redirectTo: '/'
    // });
  });