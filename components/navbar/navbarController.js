(function () {

function navbarController ($scope) {
  console.log('Hi')
  $scope.hi = 'Hello World'
}

angular.module("pixewsWeb").controller('navbarController', navbarController)

})()