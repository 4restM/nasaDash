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
  })

.factory('Dash', function ($https) {
  console.log('Dash factory has been fired')
  var getURL = function () {
    return $https({
      method: 'GET',
      url: 'https://api.nasa.gov/planetary/apod?api_key=BmdjxT0wDG093ZC0qM4cihqZMnGvVC22MUiQ4esB'
    }).then(function(resp) {
      if(resp.url.includes('youtube')){
        resp.url = 'http://www.siwallpaperhd.com/wp-content/uploads/2016/12/high_resolution_space_galaxy_images_4k.jpg'
      }
      return resp.url;
    }, function(err) {
      console.log(err);
    });
  };

  return {
    getURL: getURL
  };
});
