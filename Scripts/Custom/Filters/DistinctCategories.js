angular.module('SportzApp')
    .filter("distinctCategories", function () {
        return function(listOfProduct){
            var keys = [];
            var results = [];

            for (i = 0; i < listOfProduct.length; i++) {
                var catName = listOfProduct[i].category;

                if (angular.isUndefined(keys[catName])){
                    keys[catName] = true;
                    results.push(catName);
                }
            }

            return results;
        }
    });