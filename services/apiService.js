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

  return {
    'search': _search
  }

}

angular.module("pixewsWeb").factory("apiService", apiService)

})()