//Dummy data removed


angular.module("SportzApp")
   .controller("SportzAppCTRL", function ($scope, localServer) {
        var currentlySelectedCategory = 'HOME';

        localServer.getProductList(function (productList) {
            $scope.data = productList;
        });

        $scope.selectCategory = function (catSelected) {
            currentlySelectedCategory = catSelected;
        }

        $scope.getCategoryClass = function(forCategory){
            return forCategory == currentlySelectedCategory? 'btn-primary' : '';
        }

        $scope.productsInSelectedCategory = function (productInQuestion) {
            return currentlySelectedCategory == 'HOME' || productInQuestion.category == currentlySelectedCategory;
        }

       //Cart Interaction
        $scope.itemCount = function () {
            return localServer.shoppingCart.getCartItemsCount();
        }

        $scope.cartTotal = function () {
            return localServer.shoppingCart.getCartPrice();
        }

        $scope.addToCart = function (productToAdd) {
            localServer.shoppingCart.addToCart(productToAdd.productId, productToAdd.name, productToAdd.price);
        }
    });