'use strict';

/* Controllers */
var myApp = angular.module('myApp', ['ngRoute']);


/* Config */
myApp.config([
    '$routeProvider', '$locationProvider',
    function ($routeProvide, $locationProvider) {
        $routeProvide
            .when('/home', {
                templateUrl: 'src/templates/home.html',
                controller: 'ItemListCtrl'
            })
            .when('/', {
                templateUrl: 'src/templates/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'src/templates/about.html',
                controller: 'AboutCtrl'
            })
            .when('/contact', {
                templateUrl: 'src/templates/contact.html',
                controller: 'ContactCtrl'
            })
            .when('/phones/:phoneId', {
                templateUrl: 'src/templates/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);
myApp.filter('checkmark',function(){
    return function(input){

    }
})
myApp.controller('ItemListCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.title = 'Телефоны';

    $http.get('src/phones/phones.json').success(function (data, status, headers, config) {
        /*console.log('This is Data:', data, '\n\nThis is Status:', status, '\n\nThis is Headers:', headers, '\n\nThis is config:', config);*/
        $scope.phones = data;
    });

}]);
myApp.controller('MainCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);

myApp.controller('AboutCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);
myApp.controller('ContactCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);
myApp.controller('PhoneDetailCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
    var url = 'src/phones/about/' + $routeParams.phoneId + '.json';
    $http.get(url).success(function (data, status, headers, config) {
        /*console.log('This is Data:', data, '\n\nThis is Status:', status, '\n\nThis is Headers:', headers, '\n\nThis is config:', config);*/
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
    });
    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}]);