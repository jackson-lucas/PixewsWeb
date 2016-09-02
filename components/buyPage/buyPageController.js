(function () {

function buyPageController ($scope, $location, $uibModal, $window) {
  var $ctrl = this;

  $scope.items = $window.localStorage.getItem('shoppingCart')

  $scope.removeItem = function (pictureIndex) {
    $scope.items.splice(pictureIndex, 1)

    $window.localStorage.setItem('shoppingCart', $scope.items)
  }

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

angular.module("pixewsWeb").controller('buyPageController', buyPageController)

})()