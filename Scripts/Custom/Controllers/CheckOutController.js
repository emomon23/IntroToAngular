angular.module("SportzApp")
.controller("checkoutCTRL", function ($scope, localServer) {
    $scope.cartData = localServer.shoppingCart.getProducts();

    $scope.total = localServer.shoppingCart.getCartPrice();
    
    $scope.itemsCount = localServer.shoppingCart.getCartItemsCount();
    
    $scope.remove = function (id) {
        localServer.shoppingCart.removeFromCart(id);
    }

    $scope.sendOrder = function () {
        var order = angular.copy($scope.data.shipping);
    
        localServer.saveOrder(order, function (confCode) {
            $scope.data.saveOrderMessage = confCode;
        });
    }
    

});