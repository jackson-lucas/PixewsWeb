(function () {

function searchPageController (
  $scope,
  $location,
  results,
  ModalService,
  $window,
  shoppingCartService
) {

  console.log('Search Page')
  console.log(results)
  $scope.results = results.data

  $scope.addItem = shoppingCartService.add

  $scope.showPicture = function (picture) {
    ModalService.showModal({
      templateUrl: "components/pictureModal/pictureModalTemplate.html",
      controller: "pictureModalController",
      inputs: {
        title: "A More Complex Example",
        picture: picture
      }
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
      });
    })
  }
}

angular.module("pixewsWeb").controller('searchPageController', searchPageController)

})()