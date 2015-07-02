angular.module('SportzApp').directive('relatedItemsPopover', function () {

    return {
        restrict: 'E',
        scope: {
            item: '='
        },
        templateUrl: 'scripts/custom/directives/relatedItemsPopover.tpl.html',
        link: function (scope, element) {
            scope.setPopoverCoordinates = function ($event) {
                scope.top = element.prop('offsetTop') - 35;
                scope.left = element.prop('offsetLeft') + 123;
                if ($event) {
                    $event.stopPropagation();
                }
            };
        },
        controller: function ($scope, $document, localServer) {
            $scope.similarProducts = [];

            $scope.togglePopover = function ($event) {
                $scope.showPopover = !$scope.showPopover;
                $scope.setPopoverCoordinates($event);
            };

            localServer.productFacade.getProductList(function (productList) {
                $scope.similarProducts = productList.products.filter(function (product) {
                    return product.category === $scope.item.category;
                });
            });

            function closePopoverOnDocumentClick() {
                $scope.$apply(function () {
                    if ($scope.showPopover) {
                        $scope.togglePopover();
                    }
                });
            }

            $document.on('click', closePopoverOnDocumentClick);
        }
    };
});