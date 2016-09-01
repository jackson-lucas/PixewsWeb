(function () {

function apiService($http, config) {

  function _search (tags) {
    var req = {
      method: 'GET',
      url: config.baseApi + "/imagens",
      //query string params
      params: {
        'tags': tags
      },
      paramSerializer: '$httpParamSerializerJQLike',
      headers: {
        'token': config.publicToken
      }
    };
    return $http(req);
  };

  function _login (email, senha) {
    var req = {
      method: 'POST',
      url: config.baseApi + "/empresa",
      paramSerializer: '$httpParamSerializerJQLike',
      data: {
        'email': email,
        'senha': senha
      }
    };
    return $http(req);
  };

  return {
    'search': _search,
    'login': _login
  }

}

angular.module("pixewsWeb").factory("apiService", apiService)

})()