(function () {

function searchPageController ($scope, $location) {
  console.log('Search Page')
  $scope.queryParameters = $location.search()
}

angular.module("pixewsWeb").controller('searchPageController', searchPageController)

})()