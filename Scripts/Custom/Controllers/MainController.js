//Dummy data removed


angular.module("SportzApp")
   .constant('getProductListURL', 'api/products/getproducts')
   .controller("SportzAppCTRL", function ($scope, $http, getProductListURL, cart) {
       var currentlySelectedCategory = 'HOME';

       $http.get(getProductListURL)
       .success(function (getProductsResponse) {
           $scope.data = getProductsResponse;
       })
       .error(function (error) {
           $scope.data.heartBeatResult = error.status;
       });
                 
        $scope.heartBeat = function () {
            var url = 'api/SysAdmin/PingService';
            
            $scope.data.heartBeatResult = '';

            $http.get(url)
           .success(function (data) {
               $scope.data.heartBeatResult = data;
           })
           .error(function (error) {
               $scope.data.heartBeatResult = error;
           });
        }

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
            return cart.getCartItemsCount();
        }

        $scope.cartTotal = function () {
            return cart.getCartPrice();
        }
    });