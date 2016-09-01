(function () {

function loginPageController ($scope, apiService) {

  $scope.login = function (email, senha) {
    apiService.login(email, senha)
      .then(function success (response) {
        console.log('logged')
        console.log(response)
        $window.localStorage.token = response.data.token
      }, function error (response) {
        console.error(response)
      })
  }
}

angular.module("pixewsWeb").controller('loginPageController', loginPageController)

})()