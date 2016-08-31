(function () {
  function pictureModalController ($scope, $uibModalInstance) {
    var $ctrl = this;
    console.log('Picture Modal')

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