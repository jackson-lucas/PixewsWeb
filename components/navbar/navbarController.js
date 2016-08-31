(function () {

function navbarController ($scope, $location, apiService) {
  console.log('Hi')
  $scope.hi = 'Hello World'

  $scope.changePage = function (pageName) {
    console.log('going to ' + pageName);
    $location.path(pageName)
  }

  $scope.search = function () {
    console.log('searching');
    apiService.search($scope.tags)
  }
}

angular.module("pixewsWeb").controller('navbarController', navbarController)

})()