(function () {

function shoppingCartService($window) {

  var subscribers = []

  function get () {
    return $window.localStorage.getItem('shoppingCart') || []
  }

  function subscribe (callback) {
    subscribers.push(callback)
  }

  function publish () {
    var index = 0
    var shoppingCart = get() || []

    for (index=0; index < subscribers.lenght; index++) {
      subscribers[index](shoppingCart)
    }
  }

  function add (picture) {
    var shoppingCart = $window.localStorage.getItem('shoppingCart') || []

    if (shoppingCart.indexOf(picture) == -1) {
      console.log('adding')
      console.log(shoppingCart)
      $window.localStorage.shoppingCart = shoppingCart.push(picture)
    }

    publish()
  }

  function remove (pictureId) {
    var shoppingCart = $window.localStorage.getItem('shoppingCart')

    shoppingCart.splice(pictureId, 1)

    $window.localStorage.setItem('shoppingCart', shoppingCart)

    publish()
  }

  function removeAll () {
    console.log('removeAll')

    delete $window.localStorage.shoppingCart

    publish()
  }

  return {
    get: get,
    subscribe: subscribe,
    publish: publish,
    add: add,
    remove: remove,
    removeAll: removeAll
  }

}

angular.module("pixewsWeb").factory("shoppingCartService", shoppingCartService)

})()