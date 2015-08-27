// Include app dependency on ngMaterial
var groceries = angular.module( 'GroceriesApp', [] );

groceries.controller("MainController", function($scope) {
  
  $scope.genericList = [
    'Eggs',
    'Bread',
    'Milk',
    'Cheese',
    'Tomatoes',
    'Kale',
    'Tofu',
    'Eggplant',
    'Lettuce',
    'Onions',
    'Cereal',
    'Rice',
    'Chicken',
    'Shrimp'
  ];

});
