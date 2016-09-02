(function () {

function routes($routeProvider) {

  $routeProvider
    .when("/", {
      templateUrl: "components/homePage/homePageTemplate.html",
      controller: "homePageController"
    })
    .when("/pesquisar", {
      templateUrl: "components/searchPage/searchPageTemplate.html",
      controller: "searchPageController",
      resolve: {
        results: function (apiService, $location) {
          return apiService.search($location.search().tags)
          // return []
        }
      }
    })
    .when("/cadastrar", {
      templateUrl: "components/registerPage/registerPageTemplate.html",
      controller: "registerPageController"
    })
    .when("/login", {
      templateUrl: "components/loginPage/loginPageTemplate.html",
      controller: "loginPageController"
    })

  //
  // $routeProvider.when("/empresa/:id", {
  //   templateUrl: "components/searchPage/searchPageTemplate.html",
  //   controller: "searchPageController"
  // })


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