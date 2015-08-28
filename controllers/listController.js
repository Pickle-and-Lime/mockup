groceries.controller('listController', function($scope, Lists) {

  $scope.suggestions = Lists.suggestions;
  $scope.masterList = Lists.masterList;
  $scope.shoppingList = Lists.shoppingList;
  $scope.pantryList = Lists.pantryList;
  $scope.pantryBuilder = Lists.pantryBuilder;

  $scope.addSuggestion = function(index) {
    Lists.moveToList($scope.suggestions, $scope.shoppingList, index);
  };

  $scope.removeSuggestion = function(index) {
    Lists.removeFromList($scope.suggestions, index);
  };

  $scope.addToShoppingList = function(item) {
    Lists.addToList(item, $scope.shoppingList);
  };

  $scope.removeListItem = function(index) {
    Lists.removeFromList($scope.shoppingList, index);
  };

  $scope.buyListItem = function(index) { // move from shoppingList to pantryList
    Lists.moveToList($scope.shoppingList, $scope.pantryList, index);
  };

  $scope.removeFromPantryBuilder = function(index) { // remove from pantryBuilder
    Lists.removeFromList($scope.pantryBuilder, index);
  };
  
  $scope.needFromPantryBuilder = function(index) { // move from pantryBuilder to shoppingList
    Lists.moveToList($scope.pantryBuilder, $scope.shoppingList, index);
  };

  $scope.haveFromPantryBuilder = function(index) { // move from pantryBuilder to pantryList
    Lists.moveToList($scope.pantryBuilder, $scope.pantryList, index);
  };
    
  $scope.addToPantryList = function(item) {
    Lists.addToList(item, $scope.pantryList);
  };
  
});

groceries.factory('Lists', function() {
  var suggestions = [ // suggestions for items based on predicted needs
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

  var masterList = [ // master list of all possible items
    'Asparagus',
    'Broccoli',
    'Cabbage',
    'Carrots',
    'Cauliflower',
    'Celery',
    'Corn',
    'Garlic',
    'Lettuce',
    'Mushrooms',
    'Onions',
    'Peppers',
    'Potato',
    'Squash',
    'Sweet Potato',
    'Tomatoes',
    'Zucchini',
  ];

  var shoppingList = []; // current shopping list

  var pantryList = []; // current pantry list

  var pantryBuilder = masterList.slice(); // list to display in pantry builder

  return {
    suggestions: suggestions,

    masterList: masterList,

    shoppingList: shoppingList,

    pantryList: pantryList,

    pantryBuilder: pantryBuilder,

    // helper function to move item at index from origin array to destination array
    moveToList: function(origin, destination, index) {
       var item = origin.splice(index, 1)[0];
       if (destination.indexOf(item) === -1) { // push to destination if item doesn't exist already
         destination.push(item);
       }
    },

    // helper function move item at index from list
    removeFromList: function(list, index) {
      list.splice(index, 1);
    },

    // adds a new item to any number of lists that are optional arguments
    addToList: function(item) {
      for (var i = 1; i < arguments.length; i++) {
        arguments[i].push(item);
      }
    }

  };
});