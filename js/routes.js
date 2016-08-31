(function () {

function routes($routeProvider) {

  $routeProvider.when("/", {
    templateUrl: "components/searchPage/searchPageTemplate.html",
    controller: "searchPageController"
  })

  $routeProvider.otherwise({
    redirectTo: "/"
  })
}

angular.module("pixewsWeb").config(routes)

})()