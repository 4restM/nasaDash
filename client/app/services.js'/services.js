angular.module('shortly.services', [])

.factory('Dash', function ($http) {
  var getURL = function () {
    return $http({
      method: 'GET',
      url: '/api/dash'
    }).then(function(resp) {
      if(resp.data.url.includes('youtube')){
        resp.data.url = ''
      }
      return resp.data.url;
    }, function(err) {
      console.log(err);
    });
  };

  return {
    getURL: getURL
  };

});
