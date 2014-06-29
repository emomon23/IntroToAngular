//Dummy Data!
var dummyData = {
    promotionalMessage : "Fishing Lures on sale, 50% off!",
    products: [
                { name: "DD Blake and Decker Drill", price: 43.23, description: "Mid level drill (Dummy data)", category: "Tools" },
                { name: "DD Mikita Cordless Saw", price: 159.72, description: "3.5 inch cordless saw (Dummy data)", category: "Tools" },
                { name: "DD Rapala Copper #4", price: 9.89, description: "crank bait, 8-12 feet (Dummy data)", category: "Fishing Lures" },
                { name: "DD Rapala Fire Tiger #6", price: 9.89, description: "crank bait, 8-12 feet (Dummy data)", category: "Fishing Lures" },
                { name: "DD Rapala Fire Tiger #14", price: 19.89, description: "crank bait, 15-22 feet (Dummy data)", category: "Fishing Lures" },
                { name: "DD Yozury Fire Tiger", price: 42.89, description: "Japaneese crank bait, 10-17 feet (Dummy data)", category: "Fishing Lures" },
    ]
};

















angular.module("SportzApp")
   .controller("SportzAppCTRL", function ($scope, $http) {
        $scope.data = dummyData
                
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
    });