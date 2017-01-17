angular.module('nasadash.services', [])

.factory('Dash', function ($http) {
  var getURL = function () {
    return $http({
      method: 'GET',
      url: '/api/dash'
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
