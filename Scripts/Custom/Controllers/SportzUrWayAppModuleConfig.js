angular.module("AppNameHere")
.config(function ($routeProvider) {
    $routeProvider.when("/checkout",
        { templateUrl: "/html/CartSummary.html" });

    $routeProvider.when('/products',
        { templateUrl: "/html/productsList.html" });

    $routeProvider.otherwise({
        templateUrl: '/html/productsList.html'
    });
});