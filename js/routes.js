(function () {

function routes($routeProvider) {

  $routeProvider.when("/", {
    templateUrl: "components/homePage/homePageTemplate.html",
    controller: "homePageController"
  })

  $routeProvider.when("/pesquisar", {
    templateUrl: "components/searchPage/searchPageTemplate.html",
    controller: "searchPageController",
    resolve: {
      results: function (apiService, $location) {
        return apiService.search($location.search().tags)
      }
    }
  })
  //
  // $routeProvider.when("/empresa/:id", {
  //   templateUrl: "components/searchPage/searchPageTemplate.html",
  //   controller: "searchPageController"
  // })

  $routeProvider.when("/cadastar", {
    templateUrl: "components/registerPage/registerPageTemplate.html",
    controller: "registerPageController"
  })

  $routeProvider.when("/login/", {
    templateUrl: "components/loginPage/loginPageTemplate.html",
    controller: "loginPageController"
  })
  //
  // $routeProvider.when("/comprar/", {
  //   templateUrl: "components/searchPage/searchPageTemplate.html",
  //   controller: "searchPageController"
  // })
  //
  // $routeProvider.when("/foto/:id", {
  //   templateUrl: "components/searchPage/searchPageTemplate.html",
  //   controller: "searchPageController"
  // })

  // $routeProvider.otherwise({
  //   redirectTo: "/"
  // })
}

angular.module("pixewsWeb").config(routes)

})()