(function () {

function loginPageController ($scope, $window, apiService) {

function isLoginValid () {
    if($scope.email == null || $scope.email == "" || $scope.senha == null || $scope.senha == ""){
      //alert("Campo vazio");
      $.notify({
        title: '<strong>Aviso!</strong>',
        message: 'Campo vazio.'
      },{
        type: 'danger'
      });
      return false;
    }

    var x = $scope.email;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        //alert("E-mail não válido");
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

}

  $scope.login = function (email, senha) {
    if (isLoginValid()) {
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