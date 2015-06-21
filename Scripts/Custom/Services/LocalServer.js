angular.module('SportzApp')
  .constant('getProductListURL', 'api/products/getproducts')
  .constant('saveOrderURL', 'api/Products/SaveOrder')
  .factory('localServer', function ($http, $location, getProductListURL, saveOrderURL) {

      var cartInst = new shoppingCart();
      var productFacdeInst = new productFacadeFnc($http, getProductListURL);
      var orderFacadeInst = new orderFacadeFnc($http, $location, saveOrderURL, cartInst);

      return {
          shoppingCart: cartInst,
          productFacade: productFacdeInst,
          orderFacade: orderFacadeInst
      }
  });