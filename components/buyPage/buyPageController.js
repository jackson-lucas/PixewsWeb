(function () {

function buyPageController ($scope, $location, $window, ModalService) {
  var $ctrl = this;

  $scope.items = $window.localStorage.getItem('shoppingCart')

  $scope.removeAll = function () {
    delete $window.localStorage.shoppingCart
  }

  $scope.removeItem = function (pictureIndex) {
    $scope.items.splice(pictureIndex, 1)

    $window.localStorage.setItem('shoppingCart', $scope.items)
  }

  $scope.buy = function () {
    var isLogged = !!$window.localStorage.getItem('chave')

    if (isLogged) {
      // do transaction
    } else {
      $location.path('login')
    }
  }

  $scope.showPicture = function (image) {
    console.log('showing picture')
    console.log(image)

    ModalService.showModal({
      templateUrl: "components/pictureModal/pictureModalTemplate.html",
      controller: "pictureModalController",
      inputs: {
        title: "A More Complex Example"
      }
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
      });
    })
  }
}

angular.module("pixewsWeb").controller('buyPageController', buyPageController)

})()