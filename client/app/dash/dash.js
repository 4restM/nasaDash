angular.module('nasadash.dash', [])

.controller('DashController', function($scope, Dash) {
  
})

.controller('timeController', function($scope, $timeout){
  $scope.clock = "loading clock";
  $scope.tickInterval = 1000; //1 sec

  var tick = function (){
    $scope.clock = Date.new();
    $timeout(tick, $scope.tickInterval);
  }

  $timeout(tick, $scope.tickInterval);
})