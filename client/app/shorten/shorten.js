angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {
  };

  $scope.addLink = function () {
    var link = $scope.link.url;

    Links.addOne($scope.link)
    .then(function (resp) {
      console.log(resp);
    });


  };
});
