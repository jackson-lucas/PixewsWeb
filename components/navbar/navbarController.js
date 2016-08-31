(function () {

function navbarController ($scope, $location, apiService) {
  console.log('Hi')
  $scope.hi = 'Hello World'

  $scope.changePage = function (pageName) {
    console.log('going to ' + pageName);
    $location.path(pageName)
  }

  $scope.search = function (tags) {
    tags = tags.split(' ').reduce(function (previous, current) {
      return previous + '+' + current
    })
    
    console.log('searching')
    $location.path('/pesquisar').search({
      'tags': tags
    });
    // .replace('\s', '+')
  }
}

angular.module("pixewsWeb").controller('navbarController', navbarController)

})()