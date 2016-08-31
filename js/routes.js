(function () {

function routes($routeProvider) {

  $routeProvider.when("/", {
    templateUrl: "components/searchPage/searchPageTemplate.html",
    controller: "searchPageController"
  })

  $routeProvider.when("/empresa/:id", {
    templateUrl: "components/searchPage/searchPageTemplate.html",
    controller: "searchPageController"
  })

  $routeProvider.when("/cadastrar/", {
    templateUrl: "components/searchPage/searchPageTemplate.html",
    controller: "searchPageController"
  })

  $routeProvider.when("/login/", {
    templateUrl: "components/loginPage/loginPageTemplate.html",
    controller: "loginPageController"
  })

  $routeProvider.when("/comprar/", {
    templateUrl: "components/searchPage/searchPageTemplate.html",
    controller: "searchPageController"
  })

  $routeProvider.when("/foto/:id", {
    templateUrl: "components/searchPage/searchPageTemplate.html",
    controller: "searchPageController"
  })

  $routeProvider.otherwise({
    redirectTo: "/"
  })
}

angular.module("pixewsWeb").config(routes)

})()