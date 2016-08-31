(function () {

function searchPageController ($scope, $location, results, $uibModal) {
  var $ctrl = this;

  console.log('Search Page')
  console.log(results)
  // console.log($uibModal)
  var modalInstance = $uibModal.open({
    animation: $ctrl.animationsEnabled,
    ariaLabelledBy: 'modal-title',
    ariaDescribedBy: 'modal-body',
    templateUrl: '../pictureModal/pictureModalTemplate.html',
    controller: 'pictureModalController',
    controllerAs: '$ctrl',
    size: size,
  });
}

angular.module("pixewsWeb").controller('searchPageController', searchPageController)

})()