(function () {

function searchPageController ($scope, $location, results, $uibModal, $window) {
  var $ctrl = this;

  console.log('Search Page')
  console.log(results)
  $scope.results = [{
    name: 'Que imagem',
    description: 'Uma imagem que representa o vácuo',
    id: '3j4l3FDLJK'
  }]

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