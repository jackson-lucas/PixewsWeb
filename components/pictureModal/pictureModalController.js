(function () {
  function pictureModalController ($scope, $uibModalInstance) {
    var $ctrl = this;
    console.log('Search Page')
    console.log(results)
    // console.log($uibModal)
    $ctrl.ok = function () {
      $uibModalInstance.close('ok');
    };

    $ctrl.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular.module("pixewsWeb").controller('pictureModalController', pictureModalController)
})()