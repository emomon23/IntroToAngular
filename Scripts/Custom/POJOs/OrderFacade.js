function orderFacadeFnc(httpService, locationService, endPointUrl, cart) {
    var self = this;

    self.saveOrder = function (order, callBack) {
        order.products = cart.getProducts();

        httpService.post(endPointUrl, order)
           .success(function (confCode) {
               cart.emptyCart();
               callBack(confCode);
           })
           .error(function (error) {
               callBack(error.message)
           })
           .finally(function () {
               locationService.path('/complete');
           });
    }
}