angular.module('nasadash', [
  'nasadash.dash',
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