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
            .when('/sale', {
                templateUrl: 'src/templates/sale.html',
                controller: 'SaleCtrl'
            })

            .otherwise({
                redirectTo: 'src/templates/home.html'
            });
    }
]);
myApp.filter('checkmark',function(){
    return function(input){

    }
})
myApp.controller('ItemListCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.title = 'Телефоны';

    $http.get('src/items/clothes.json').success(function (data, status, headers, config) {
        /*console.log('This is Data:', data, '\n\nThis is Status:', status, '\n\nThis is Headers:', headers, '\n\nThis is config:', config);*/
        $scope.clothes = data;

        $scope.disableClick = function () {
            var result = document.getElementsByClassName("nav-action");
            var wrappedResult = angular.element(result);
            var windowWidth = angular.element(window);
            wrappedResult.slideToggle(500);

            windowWidth.bind('resize', function () {
                if (windowWidth.width() > 500) {
                    wrappedResult.removeAttr('style');
                }
            });

        }
        $scope.searchClick = function () {
            var result = document.getElementsByClassName("search__form");
            var wrappedResult = angular.element(result);
            var windowWidth = angular.element(window);
            wrappedResult.slideToggle(5);

            windowWidth.bind('resize', function () {
                if (windowWidth.width() > 500) {
                    wrappedResult.removeAttr('style');
                }
            });

        }
    });

}]);
myApp.controller('MainCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);
myApp.controller('SaleCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);

myApp.controller('AboutCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);
myApp.controller('ContactCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

}]);
myApp.controller('ItemDetailCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {

}]);