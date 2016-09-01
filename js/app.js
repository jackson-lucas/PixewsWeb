angular.module('pixewsWeb', [
  'ngRoute',
  'ngTouch',
  'ngAnimate',
  'ui.bootstrap'
]);

angular.module('pixewsWeb').constant('config', {
  baseApi: 'http://api.pixews.com',
  // baseApi: 'http://localhost:3000',
  publicToken: "2d7fEicnEirsPE"
})