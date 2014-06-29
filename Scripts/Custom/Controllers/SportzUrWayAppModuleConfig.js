angular.module("SportzApp")
.config(function ($routeProvider) {
    $routeProvider.when("/checkout",
        { templateUrl: "/html/CartSummary.html" });

    $routeProvider.when('/products',
        { templateUrl: "/html/ListOfProducts.html" });

    $routeProvider.when('/placeOrder',
       { templateUrl: "/html/PlaceOrder.html" });

    $routeProvider.when('/complete',
      { templateUrl: "/html/thankyou.html" });

    $routeProvider.otherwise({
        templateUrl: '/html/ListOfProducts.html'
    });
});