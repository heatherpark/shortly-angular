 angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};

  $scope.getAll = function () {
    Links.getAll()
    .then(function (data) {
      $scope.data.links = data;
    });
  };
  $scope.getAll();
});


