(function () {

function searchPageController ($scope, $location, results) {
  console.log('Search Page')
  $scope.queryParameters = $location.search()
  console.log(results)
}

angular.module("pixewsWeb").controller('searchPageController', searchPageController)

})()