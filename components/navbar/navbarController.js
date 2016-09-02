(function () {

function navbarController ($scope, $location, apiService, $window) {

  $scope.isLogged = !!$window.localStorage.getItem('chave')

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

  $scope.logoff = function () {
    $window.localStorage.chave = undefined
    $window.localStorage.token = undefined
    $window.localStorage.usuario = undefined
    $scope.isLogged = false;
  }
}

angular.module("pixewsWeb").controller('navbarController', navbarController)

})()