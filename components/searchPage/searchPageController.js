(function () {

function searchPageController ($scope, $location, results, $uibModal, $window) {
  var $ctrl = this;

  console.log('Search Page')
  console.log(results)
  $scope.results = results.data

  $scope.addItem = function (pictureId) {
    var shoppingCart = $window.localStorage.getItem('shoppingCart')

    if (!shoppingCart) {
      shoppingCart = []
    }

    if (shoppingCart.indexOf(pictureId) == -1) {
      $window.localStorage.shoppingCart = shoppingCart.push(pictureId)
    }

    console.log($window.localStorage.getItem('shoppingCart'))
  }
  // console.log($uibModal)
  $ctrl.open = function (size) {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'components/pictureModal/pictureModalTemplate.html',
      controller: 'pictureModalController',
      controllerAs: '$ctrl',
      size: size,
    });
  }
}

angular.module("pixewsWeb").controller('searchPageController', searchPageController)

})()