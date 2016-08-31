(function () {

function routes($routeProvider, config) {

  $routeProvider.when("/", {
    templateUrl: "views/PlayerTpl.html",
    controller: "PlayerCtrl",
    resolve: {
    }
  })

  $routeProvider.otherwise({
    redirectTo: "/"
  })
}

angular.module("icomptvApp").config(routes)

})()