angular.module('SportzApp')
  .constant('getProductListURL', 'api/products/getproducts')
  .constant('saveOrderURL', 'api/Products/SaveOrder')
  .factory('localServer', function ($http, $location, getProductListURL, saveOrderURL) {

      var products = null;
      var cart = new shoppingCart();

      return {
          shoppingCart: cart,

          getProductList: function (callBack) {
              if (products == null) {
                  $http.get(getProductListURL)
                       .success(function (getProductsResponse) {
                           products = getProductsResponse;
                           callBack(products)
                       })
                       .error(function (error) {
                           //Dosomething = error.status;
                       });
              }
              else {
                  callBack(products);
              }
          },

          saveOrder: function (shippingInformation, callBack) {
              shippingInformation.products = cart.getProducts();

              $http.post(saveOrderURL, shippingInformation)
                 .success(function (confCode) {
                     cart.emptyCart();
                     callBack(confCode);
                 })
                 .error(function (error) {
                     callBack(error.message)
                 })
                 .finally(function () {
                     $location.path('/complete');
                 });
          }
      }
  });