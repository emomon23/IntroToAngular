function productFacadeFnc(httpService, endPointUrl) {
    var self = this;
    var products = null;

    self.getProductList = function (callBack) {
        if (products == null) {
            httpService.get(endPointUrl)
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
    }
}