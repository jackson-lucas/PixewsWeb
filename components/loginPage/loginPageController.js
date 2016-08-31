(function () {

function loginPageController ($scope) {
  console.log('Hi')
  $scope.hi = 'Hello World'
}

angular.module("pixewsWeb").controller('loginPageController', loginPageController)

})()