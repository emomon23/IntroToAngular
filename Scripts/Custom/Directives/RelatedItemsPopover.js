angular.module('SportzApp').directive('relatedItemsPopover', function () {

    return {
        restrict: 'E',
        scope: {
            item: '='
        },
        templateUrl: 'scripts/custom/directives/relatedItemsPopover.tpl.html',
        link: function (scope, element) {
            element.on('click', function (evt) {
                scope.$apply(function () {
                    scope.top = element.prop('offsetTop') - 35;
                    scope.left = element.prop('offsetLeft') + 123;
                });
                evt.stopPropagation();
            });
        },
        controller: function ($scope, $document, localServer) {
            $scope.similarProducts = [];

            $scope.togglePopover = function () {
                $scope.showPopover = !$scope.showPopover;
            };

            localServer.productFacade.getProductList(function (productList) {
                $scope.similarProducts = productList.products.filter(function (product) {
                    return product.category === $scope.item.category;
                });
            });

            $document.on('click', function () {
                $scope.$apply(function () {
                    if ($scope.showPopover) {
                        $scope.togglePopover();
                    }
                });
            });
        }
    };
});