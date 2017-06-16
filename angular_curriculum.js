(function (angular) {
    'use strict';
    var app = angular.module("to_do_app", []);
    
    app.controller("app_working", ["$scope", function ($scope) {
        
        // for append item in list
        $scope.nameList = [
            {name: "shivam", done: false}, {name: "motii", done: false}
        ];
        //yha mere ko nameList ki length nikalni hia on the basis their states  
        function getCount() {
            var count =0;
            //for element in nameList
                for (var element in $scope.nameList){
                    //mujhe ab element mei done ki value false hia ya ni
//                    console.log($scope.nameList[1].done);
//                    console.log(element);
                    if ($scope.nameList[element].done ==false){
                        count = count +1;     
                    }
                }
            $scope.length =count;
        }
    
        getCount();
        //yha mene uss value ko namelist mei append kiya hia user input deta hia  
        $scope.append = function () {
            //yha mene pure ek element ko namelist nam ki array mei append kiya hai
            $scope.nameList.push({name: $scope.value_input, done: false});
            getCount();
            //fir mene usse variable ki value update kar diya hia
            $scope.value_input = "";
        };
        //yha mene class change karne k liye ek function banaya hia 
        $scope.changeclass = function (name) {
            //yha mene namelist k element ki state change ki hai agar wo true hia to false kari hai aur agar wo false hia to true ki hai
            if (name.done) {
                name.done = false;
            } else {
                name.done = true;
            }
            getCount();
            // name.done = name.done ? false : true;
        };
//        $scope.changeclass();
    }]);
})(window.angular);