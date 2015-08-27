// Include app dependency on ngMaterial
var groceries = angular.module( 'GroceriesApp', [] );

groceries.controller("MainController", function($scope) {
  $scope.text = 'Hello there';

  $scope.values = ['one','two','three','four'];

  $scope.log = function(item) {
    console.log(item);
  };
});
