// Include app dependency on ngMaterial
var groceries = angular.module( 'GroceriesApp', ['ui.router'] );

groceries.config(function($stateProvider) {
  $stateProvider
    .state('landing', {
      url: "/landing",
      views: {
        "mainArea": { templateUrl: "views/landing.html" },
        // "header": { templateUrl: "views/navbar.html" },
        "title": { template: "Rosie" }
      }
    })
    .state('list', {
      url: "/list",
      views: {
        "mainArea": { templateUrl: "views/list.html" },
        // "header": { templateUrl: "views/navbar.html" },
        "title": { template: "My List" }
      }
    })
    .state('pantry', {
      url: "/pantry",
      views: {
        "mainArea": { templateUrl: "views/pantry.html" },
        // "header": { templateUrl: "views/navbar.html" },
        "title": { template: "My Pantry" }
      }
    })
    .state('recipes', {
      url: "/recipes",
      views: {
        "mainArea": { templateUrl: "views/recipes.html" },
        // "header": { templateUrl: "views/navbar.html" },
        "title": { template: "My Recipes" }
      }
    })
    .state('account', {
      url: "/account",
      views: {
        "mainArea": { templateUrl: "views/account.html" },
        // "header": { templateUrl: "views/navbar.html" },
        "title": { template: "My Account" }
      }
    });

});

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

  $scope.winter = ['Apples','Bananas','Beets','Brussels Sprouts','Cabbage'];
  $scope.spring = ['Apples','Apricots','Asparagus','Bananas','Broccoli'];
  $scope.summer = ['Apples','Apricots','Bananas','Beets','Bell Peppers'];
  $scope.fall = ['Apples','Bananas','Beets','Bell Peppers','Broccoli'];

  $scope.todaysMarket = {
    "Name": "West Sacramento Farmers Market",
    "Address":"1271 West Capitol Ave., West Sacramento, California, 95691",
    "GoogleLink":"http:\/\/maps.google.com\/?q=38.581499%2C%20-121.523316%20(%22West+Sacramento+Farmers+Market%22)",
    "Products":"Baked goods; Cheese and\/or dairy products; Cut flowers; Eggs; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Poultry; Prepared foods (for immediate consumption); Wine, beer, hard cider",
    "Schedule":"05\/29\/2014 to 09\/25\/2014 Thu: 4:30 PM-8:00 PM"
  };

  /*
  spring - starting March 1 and ending May 31,
  summer - starting June 1 and ending August 31,
  fall (autumn) - starting September 1 and ending November 30, and
  winter - starting December 1 and ending February 28 (February 29 in a Leap Year).
  */

});
