// Include app dependency on ngMaterial
var groceries = angular.module( 'GroceriesApp', ['ui.router'] );

groceries.config(function($stateProvider) {
  $stateProvider
    .state('landing', {
      url: "/landing",
      views: {
        "mainArea": { templateUrl: "views/landing.html" },
        "title": { template: "Rosie" }
      }
    })
    .state('list', {
      url: "/list",
      views: {
        "mainArea": { templateUrl: "views/list.html",
                      controller: "listController"
                     },
        "title": { template: "My List" }
      }
    })
    .state('pantry', {
      url: "/pantry",
      views: {
        "mainArea": { templateUrl: "views/pantry.html",
                      controller: "listController"
                    },
        "title": { template: "My Pantry" }
      }
    })
    .state('recipes', {
      url: "/recipes",
      views: {
        "mainArea": { templateUrl: "views/recipes.html" },
        "title": { template: "My Recipes" }
      }
    })
    .state('household', {
      url: "/household",
      views: {
        "mainArea": { templateUrl: "views/household.html" },
        "title": { template: "My Household" }
      }
    })
    .state('account', {
      url: "/account",
      views: {
        "mainArea": { templateUrl: "views/account.html" },
        "title": { template: "My Account" }
      }
    })
    .state('about', {
      url: "/about",
      views: {
        "mainArea": { templateUrl: "views/about.html" },
        "title": { template: "Rosie" }
      }
    })
    .state('logout', {
      url: "/logout",
      views: {
        "mainArea": { templateUrl: "views/logout.html" },
        "title": { template: "Rosie" }
      }
    })

});

groceries.controller("MainController", function($scope) {
  
  // $scope.genericList = [
  //   'Eggs',
  //   'Bread',
  //   'Milk',
  //   'Cheese',
  //   'Tomatoes',
  //   'Kale',
  //   'Tofu',
  //   'Eggplant',
  //   'Lettuce',
  //   'Onions',
  //   'Cereal',
  //   'Rice',
  //   'Chicken',
  //   'Shrimp'
  // ];

  $scope.winter = ['Apples','Bananas','Beets','Brussels Sprouts','Cabbage'];
  $scope.spring = ['Apples','Apricots','Asparagus','Bananas','Broccoli'];
  $scope.summer = ['Apples','Apricots','Bananas','Beets','Bell Peppers'];
  $scope.fall = ['Apples','Bananas','Beets','Bell Peppers','Broccoli'];

  $scope.fall = [
    'Acorn Squash',
    'Asian Pear',
    'Barbados Cherries',
    'Black Crowberries',
    'Black Salsify',
    'Belgian Endive',
    'Broccoli',
    'Brussels Sprouts',
    'Butter Lettuce',
    'Buttercup Squash',
    'Butternut Squash',
    'Cactus Pear',
    'Cape Gooseberries',
    'Cardoon',
    'Cauliflower',
    'Chayote Squash',
    'Chinese Long Beans',
    'Crab Apples',
    'Cranberries',
    'Date Plum',
    'Delicata Squash',
    'Diakon Radish',
    'Endive',
    'Feijoa',
    'Garlic',
    'Ginger',
    'Grapes',
    'Guava',
    'Hearts of Palm',
    'Huckleberries',
    'Jalapeno Peppers',
    'Jerusalem Artichoke',
    'Jujube',
    'Key Limes',
    'Kohlrabi',
    'Kumquats',
    'Muscadine Grapes',
    'Mushrooms',
    'Ong Choy Spinach',
    'Passion Fruit',
    'Pear',
    'Persimmons',
    'Pineapple',
    'Pomegranate',
    'Pumpkin',
    'Quince',
    'Radicchio',
    'Sapote',
    'Sharon Fruit',
    'Sugar Apple',
    'Sunflower Kernels',
    'Sweet Dumpling Squash',
    'Sweet Potatoes',
    'Swiss Chard',
    'Turnips'
  ];

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