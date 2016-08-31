(function () {

function searchPageController ($scope) {
  console.log('Hi')
  $scope.hi = 'Hello World'
}

angular.module("pixewsWeb").controller('searchPageController', searchPageController)

})()