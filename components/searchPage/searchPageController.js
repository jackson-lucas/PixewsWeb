(function () {

function searchPageController ($scope, $location, results, $uibModal, $window) {
  var $ctrl = this;

  console.log('Search Page')
  console.log(results)
  $scope.results = results.data

  $scope.addItem = function (pictureId) {
    // $window.localStorage
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