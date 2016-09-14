(function () {

function loginPageController ($scope, $window, apiService) {

function isLoginValid () {
    if($scope.email == null || $scope.email == "" || $scope.senha == null || $scope.senha == ""){
      $.notify({
        title: '<strong>Aviso!</strong>',
        message: 'Campo vazio.'
      },{
        type: 'danger'
      });
      return false;
    }

    var email = $scope.email;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
      $.notify({
        title: '<strong>Aviso!</strong>',
        message: 'E-mail inválido.'
      },{
        type: 'danger'
      });
      return false;
    }

    var illegalChars = /[\W_]/; // allow only letters and numbers
    if ($scope.senha.length < 4 || $scope.senha.length > 16 || illegalChars.test($scope.senha)) {

      //alert("Senha não aceita! Mínimo de 4 caracteres");
      $.notify({
        title: '<strong>Aviso!Senha inválida</strong>',
        message: 'Mínimo de 4 caracteres.'
      },{
      type: 'danger'
    });
      return false;
    }
    return true;
}

  $scope.login = function (email, senha) {
    console.log('login');
    if (isLoginValid()) {
      console.log('valid');
      apiService.login(email, senha)
        .then(function success (response) {
          console.log('logged');
          console.log(response);
          $window.localStorage.token = response.data.token;
          // $window.localStorage.usuario = response.data.usuario.id
          $window.localStorage.chave = response.data.chave;
        }, function error (response) {
          console.error(response);
        })
  }
}
}
angular.module("pixewsWeb").controller('loginPageController', loginPageController)

})()